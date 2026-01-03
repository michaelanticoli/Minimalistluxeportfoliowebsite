import { motion, useScroll, useTransform } from "motion/react";
import { LunarPhase } from "./components/LunarPhase";
import { ProjectCard } from "./components/ProjectCard";
import { SkillOrbit } from "./components/SkillOrbit";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      title: "Quantum Computing Interface",
      category: "Research / Development",
      description: "Developed an intuitive interface for quantum circuit visualization, enabling researchers to interact with complex quantum algorithms through elegant visual representations."
    },
    {
      title: "Neural Architecture Search Platform",
      category: "Machine Learning / AI",
      description: "Built an automated platform for discovering optimal neural network architectures, reducing model development time while improving performance metrics across diverse datasets."
    },
    {
      title: "Distributed Systems Observatory",
      category: "Infrastructure / DevOps",
      description: "Created a real-time monitoring and analysis tool for distributed systems, providing celestial-inspired visualizations of data flow and system health."
    },
    {
      title: "Cryptographic Protocol Suite",
      category: "Security / Blockchain",
      description: "Designed and implemented a suite of cryptographic protocols for secure multi-party computation, with applications in privacy-preserving data analysis."
    }
  ];

  const skills = [
    "TypeScript", "Python", "Rust", "React", "Node.js", "TensorFlow",
    "WebGL", "Three.js", "GraphQL", "PostgreSQL", "Redis", "Kubernetes"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <LunarPhase />
            <span className="tracking-widest uppercase">CREATIVE ALCHEMY</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <motion.a
              href="#work"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              Work
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-2 mb-8 text-muted-foreground tracking-widest uppercase"
          >
            <Sparkles className="w-4 h-4" />
            <span>Digital Architect & Systems Engineer</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8">
            Crafting the
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Invisible
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Building elegant solutions at the intersection of technology,
            design, and human experience.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl tracking-tighter mb-6">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl">
            A curated collection of projects spanning systems design,
            machine learning, and interface innovation.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl tracking-tighter mb-6">
            Technical Constellation
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Technologies and tools orbiting my practice
          </p>
        </motion.div>

        <SkillOrbit skills={skills} />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-8">
              Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I believe in the marriage of technical excellence and intuitive design—
                where complex systems become invisible, and technology serves as a bridge
                rather than a barrier.
              </p>
              <p>
                My work is guided by principles of minimalism, clarity, and purpose.
                Every line of code, every interface element, exists for a reason—
                contributing to a greater whole while maintaining individual elegance.
              </p>
              <p>
                Like the phases of the moon, projects evolve through cycles of
                ideation, creation, and refinement. I embrace this natural rhythm,
                allowing each phase to inform the next.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-8">
              Approach
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Research",
                  desc: "Deep exploration of problem space and technological possibilities"
                },
                {
                  title: "Architecture",
                  desc: "Designing systems that are both robust and flexible"
                },
                {
                  title: "Implementation",
                  desc: "Precise execution with attention to performance and scalability"
                },
                {
                  title: "Iteration",
                  desc: "Continuous refinement guided by data and user feedback"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-white/20 pl-6"
                >
                  <h3 className="mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl tracking-tighter mb-12">
            Let's Create
            <br />
            Something Stellar
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Open to collaborations, consulting opportunities, and
            conversations about technology and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </motion.a>
            
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-muted-foreground">
          <div className="flex items-center gap-3">
            <LunarPhase />
            <span>© 2025 — Crafted with intention</span>
          </div>
          <div className="text-sm tracking-widest uppercase">
            Portfolio • V1.0
          </div>
        </div>
      </footer>
    </div>
  );
}
