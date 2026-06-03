import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { getMongoClient } from "../../../lib/mongodb";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = ContactSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Invalid input', details: parsed.error.flatten() },
            { status: 400 },
          )
        }

        const { name, email, message } = parsed.data

        try {
          const client = await clientPromise
          const dbName = process.env.MONGODB_DB_NAME || 'portfolioDB'
          const db = client.db(dbName)

          await db.collection('messages').insertOne({
            name,
            email,
            message,
            createdAt: new Date(),
          })
        } catch (err) {
          console.error('[contact] mongodb insert failed:', err)
          return Response.json({ error: 'Could not save message' }, { status: 500 })
        }

        const host = process.env.SMTP_HOST
        const port = Number(process.env.SMTP_PORT ?? 587)
        const user = process.env.SMTP_USER
        const pass = process.env.SMTP_PASS
        const from = process.env.FROM_EMAIL ?? user

        if (host && user && pass && from) {
          try {
            const { default: nodemailer } = await import('nodemailer')

            const transporter = nodemailer.createTransport({
              host,
              port,
              secure: port === 465,
              auth: {
                user,
                pass,
              },
            })

            await transporter.sendMail({
              from: `Portfolio Contact <${from}>`,
              to: from,
              replyTo: email,
              subject: `New portfolio message from ${name}`,
              text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
              html: `
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
              `,
            })
          } catch (err) {
            console.error('[contact] smtp send failed:', err)
          }
        } else {
          console.warn('[contact] SMTP env vars not set — skipping email notification')
        }

        return Response.json({ success: true })
      },
    },
  },
})
