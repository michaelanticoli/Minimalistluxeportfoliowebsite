import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  index: number;
}

export function ProjectCard({ title, category, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-t border-white/10 py-12 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <motion.div
            className="text-muted-foreground mb-2 tracking-widest uppercase"
          >
            {category}
          </motion.div>
          <motion.h3
            className="mb-4 tracking-tight"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.div>
      </div>
    </motion.div>
  );
}
