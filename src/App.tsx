import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { NodePlayground } from "@/components/NodePlayground";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-black dark:text-zinc-100 selection:bg-neon-yellow dark:selection:bg-neon-lime selection:text-black dark:selection:text-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <NodePlayground />
        <Testimonials />
        <ContactForm />
        <LogoTicker />
      </main>
      <Footer />
    </div>
  );
}
