import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

// Lazy-load heavy components that are below the fold
const NodePlayground = React.lazy(() =>
  import("@/components/NodePlayground").then((m) => ({ default: m.NodePlayground }))
);

function NodePlaygroundFallback() {
  return (
    <section className="py-32 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-[1920px] mx-auto px-6 text-center">
        <div className="h-[500px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse flex items-center justify-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">Loading playground…</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-black dark:text-zinc-100 selection:bg-neon-yellow dark:selection:bg-neon-lime selection:text-black dark:selection:text-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Suspense fallback={<NodePlaygroundFallback />}>
          <NodePlayground />
        </Suspense>
        <Testimonials />
        <ContactForm />
        <LogoTicker />
      </main>
      <Footer />
    </div>
  );
}
