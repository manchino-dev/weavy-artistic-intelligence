import { m } from "motion/react";
import { Brain, Share2, Shield, Zap } from "lucide-react";

const features = [
  { title: "Real-time Collaboration", description: "Work together with your team in real-time. Changes sync instantly across all devices.", icon: Share2, img: "/images/feat-collab.webp" },
  { title: "AI Model Aggregation", description: "Access GPT-4, Claude, Stable Diffusion, and more from a single unified interface.", icon: Brain, img: "/images/feat-ai.webp" },
  { title: "Node-based Workflow", description: "Visual programming for creatives. Connect nodes to build complex generative pipelines.", icon: Zap, img: "/images/feat-nodes.webp" },
  { title: "Enterprise Security", description: "SOC 2 Type II certified. Your data is encrypted and protected with industry standards.", icon: Shield, img: "/images/feat-security.webp" },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-zinc-50 dark:bg-zinc-950 relative transition-colors">
      <div className="max-w-[1920px] mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 text-black dark:text-white">
            Everything you need <br />
            <span className="text-zinc-600 dark:text-zinc-500">to build faster.</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <m.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-black/20 dark:hover:border-neon-lime/30 active:border-black/20 hover:shadow-lg active:shadow-lg transition-all duration-200 overflow-hidden will-change-transform"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-75 grayscale group-hover:opacity-100 group-active:opacity-100 group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500">
                <img
                  src={feature.img}
                  alt=""
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-white/20 dark:to-zinc-900/20" />
              </div>

              <div className="relative z-10">
                <m.div
                  whileHover={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-neon-yellow dark:group-hover:bg-neon-lime group-hover:text-black group-active:bg-neon-yellow dark:group-active:bg-neon-lime group-active:text-black transition-colors shadow-sm group-hover:shadow-md"
                >
                  <feature.icon className="w-6 h-6 text-black dark:text-zinc-100" />
                </m.div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
