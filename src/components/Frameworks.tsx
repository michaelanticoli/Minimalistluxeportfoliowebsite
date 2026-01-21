import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FrameworkModal, FrameworkData } from "./FrameworkModal";

const frameworks: FrameworkData[] = [
  {
    title: "Quantumelodies",
    subtitle: "Harmonic System Design",
    description: "Translating planetary motion into harmonic structure, bridging astronomy, mathematics, and emotional resonance.",
    longDescription: "Quantumelodies operates on the premise that the solar system is a macro-musical instrument. By assigning pitch classes to planetary positions and using angular relationships (aspects) to determine harmonic intervals, we create a sonic map of any given moment in time. This system moves beyond the 'superstition' of astrology and into the rigorous study of time, cycles, and archetypal data visualization.",
    href: "https://quantumelodies.com",
    features: [
      "Planetary-to-Pitch Conversion Algorithms",
      "Aspect Geometry Rendering Engine",
      "Temporal Harmonic Mapping",
      "Archetypal Data Visualization"
    ],
    images: [
      "https://images.unsplash.com/photo-1578433805614-747d066afebe?q=80&w=1080", // Sacred Geo
      "https://images.unsplash.com/photo-1637434325847-7bb5b9ecde33?q=80&w=1080", // Celestial Map
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1080", // Star Field
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1080", // Galaxy
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1080"  // Rain/Stars
    ]
  },
  {
    title: "The On Being Series",
    subtitle: "Psychoacoustic Archetypes",
    description: "A longform exploration of archetypal psychology through piano and production — each étude a sonic mirror of the self.",
    longDescription: "The On Being Series is a collection of sonic essays. It rejects the standard verse-chorus structure in favor of 'emotional arcs'—compositions designed to induce specific states of reflection. Utilizing minimalist piano motifs layered with field recordings and granular synthesis, the series explores the quiet violence and profound stillness of the human experience.",
    href: "https://sonic-tarot.lovable.app",
    features: [
      "Minimalist Piano Composition",
      "Field Recording Integration",
      "Granular Synthesis Textures",
      "Emotional State Modeling"
    ],
    images: [
      "https://images.unsplash.com/photo-1602346342595-6b3347c52c02?q=80&w=1080", // Piano
      "https://images.unsplash.com/photo-1762185224934-c0e82280a07d?q=80&w=1080", // B&W Texture
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1080", // Piano Keys
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1080", // Sheet Music
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1080"  // Moody
    ]
  },
  {
    title: "Brand Alchemy",
    subtitle: "Strategic Ecosystems",
    description: "A professional methodology for building brand ecosystems that align message, medium, and human meaning.",
    longDescription: "Brand Alchemy is the process of transmutation applied to business identity. It moves a brand from 'Base Matter' (unrefined product/service) through 'Purification' (market positioning and core values) to 'Illumination' (visual and verbal identity). The result is a cohesive system that breathes and adapts, rather than a static logo.",
    href: "https://creativealchemy.xyz",
    features: [
      "Archetypal Brand Strategy",
      "Visual Identity Systems",
      "Narrative Architecture",
      "Cross-Platform Coherence"
    ],
    images: [
      "https://images.unsplash.com/photo-1711779187539-ef05cbaf5ff6?q=80&w=1080", // Swiss Design
      "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?q=80&w=1080", // Typography
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1080", // Minimal Desk
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1080", // Minimal Mac
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1080"  // Notebook
    ]
  },
  {
    title: "Moontuner",
    subtitle: "Chronobiological Design",
    description: "An experimental system exploring how human creative cycles align with celestial timing and lunar phases.",
    longDescription: "Moontuner is a chronobiological productivity tool. It posits that human energy is not linear but cyclical, much like the tides. By tracking lunar phase and sign, Moontuner suggests optimal times for 'Input' (gathering inspiration) vs. 'Output' (execution), helping creatives align their workflow with natural rhythms.",
    href: "https://moontuner.xyz",
    features: [
      "Lunar Phase Tracking",
      "Circadian Rhythm Analysis",
      "Workflow Optimization",
      "Natural Timekeeping"
    ],
    images: [
      "https://images.unsplash.com/photo-1610294517329-d4aac71cd302?q=80&w=1080", // Moon Phases
      "https://images.unsplash.com/photo-1626230352254-d25d6c0b6809?q=80&w=1080", // Surface
      "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1080", // Moon Full
      "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=1080", // Dark Sky
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1080"  // Dark Clouds
    ]
  },
  {
    title: "Astroharmonic Research",
    subtitle: "Cosmic Acoustics",
    description: "Two decades of inquiry into how harmonic proportion, planetary motion, and human perception interconnect.",
    longDescription: "This ongoing research project investigates the mathematical correlations between Kepler's 'Music of the Spheres' and modern acoustic physics. By analyzing the resonant frequencies of planetary orbits and scaling them to the audible spectrum, we create soundscapes that are quite literally 'out of this world'.",
    href: "https://harmonic.quantumelodies.com",
    features: [
      "Orbital Frequency Calculation",
      "Harmonic Ratio Analysis",
      "Acoustic Physics",
      "Sonification of Data"
    ],
    images: [
      "https://images.unsplash.com/photo-1714779573250-36242918e044?q=80&w=1080", // Sound Waves
      "https://images.unsplash.com/photo-1741997852940-e2321fddabf2?q=80&w=1080", // Cymatics
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1080", // B&W Lines
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1080", // Music Festival/Abstract
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1080"  // Dark Fluid
    ]
  },
  {
    title: "Lyrix Prism",
    subtitle: "Synesthetic Analysis",
    description: "Experimental platforms translating emotion, tone, and color into interconnected systems for art and design.",
    longDescription: "Lyrix Prism is a synesthesia engine. It uses Natural Language Processing (NLP) to analyze the emotional sentiment of text (lyrics, poetry, prose) and maps it to specific color values and harmonic keys. It is a tool for seeing the color of words and hearing the sound of color.",
    href: "https://lyrix.created.app",
    features: [
      "NLP Sentiment Analysis",
      "Color-Sound Mapping",
      "Synesthetic Algorithms",
      "Generative Art Output"
    ],
    images: [
      "https://images.unsplash.com/photo-1709255230141-f8566cfb9d0e?q=80&w=1080", // Prism
      "https://images.unsplash.com/photo-1708310887176-90f95bce226c?q=80&w=1080", // Spectrum
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1080", // Space/Color
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1080", // Dark Fluid
      "https://images.unsplash.com/photo-1504707748692-419802cf939d?q=80&w=1080"  // Abstract Paint
    ]
  }
];

export function Frameworks() {
  const [selectedFramework, setSelectedFramework] = useState<FrameworkData | null>(null);

  return (
    <>
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-emerald-500/90 uppercase tracking-[0.25em] text-sm font-medium font-mono mb-6">
            <Sparkles className="w-5 h-5" />
            <span>System Architectures</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            The Anticoli Framework
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Six systems of inquiry and creation, merging design, sound, data, and metaphysics into functional creative tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedFramework(item)}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4">
                <div className="text-sm font-mono text-emerald-500/70 mb-2 uppercase tracking-[0.15em] font-medium">
                  System_0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-mono text-white/50 mt-2">
                  {item.subtitle}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {item.description}
              </p>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FrameworkModal
        isOpen={!!selectedFramework}
        onClose={() => setSelectedFramework(null)}
        data={selectedFramework}
      />
    </>
  );
}