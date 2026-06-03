import { createFileRoute } from "@tanstack/react-router";

import { Background } from "../components/portfolio/Background";
import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Projects } from "../components/portfolio/Projects";
import { Achievements } from "../components/portfolio/Achievements";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";
import { ScrollProgress } from "../components/portfolio/ScrollProgress";
import { CursorGlow } from "../components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Background />
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}