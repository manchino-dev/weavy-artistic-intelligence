import { m } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 w-full">
        {/* Animation Group 1: Titles */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20"
        >
          <div>
            <h1 className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-black dark:text-white mb-4">
              Weavy
            </h1>
          </div>

          <div className="flex flex-col justify-end h-full pt-4 lg:pt-0">
            <h2 className="text-[8vw] lg:text-[6vw] leading-[0.9] font-medium tracking-tighter text-black dark:text-white mb-8">
              Artistic Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Turn your creative vision into scalable workflows. Access all AI models and professional editing tools in one node based platform.
            </p>
          </div>
        </m.div>

        {/* Animation Group 2: Cards */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {/* Card 1: 3D Model */}
          <div className="relative aspect-[4/5] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden group will-change-transform">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 block mb-1">3D</span>
              <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">Rodin 2.0</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-zinc-300 dark:bg-zinc-700 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-1/2 h-1/2 bg-zinc-800 dark:bg-zinc-200 rounded-lg shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Card 2: Image Gen */}
          <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden group lg:col-span-1 lg:translate-y-12 will-change-transform">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 block mb-1">Image</span>
              <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">Stable Diffusion</span>
            </div>
            <img
              src="/images/hero-diffusion.webp"
              alt="AI-generated image using Stable Diffusion"
              width={600}
              height={800}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3: Text Prompt */}
          <div className="relative aspect-[4/5] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-center group will-change-transform">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 block mb-1">Text</span>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 shadow-sm">
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                "a Great-Tailed Grackle bird is flying from the background and seating on the model's shoulder slowly..."
              </p>
            </div>
            <div className="mt-4 h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden relative">
              <img
                src="/images/hero-bird.webp"
                alt="AI-generated bird illustration"
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Card 4: Video */}
          <div className="relative aspect-[4/5] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden group lg:translate-y-24 will-change-transform">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 block mb-1">Video</span>
              <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">Minimax Video</span>
            </div>
            <img
              src="/images/hero-video.webp"
              alt="AI-generated fashion video preview"
              width={600}
              height={800}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
