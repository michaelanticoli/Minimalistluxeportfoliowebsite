import { motion } from "motion/react";

interface SkillOrbitProps {
  skills: string[];
}

export function SkillOrbit({ skills }: SkillOrbitProps) {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Center core */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute w-3 h-3 rounded-full bg-white"
      />
      
      {/* Orbits */}
      {[1, 2, 3].map((orbit) => (
        <motion.div
          key={orbit}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: orbit * 0.1 }}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${orbit * 140}px`,
            height: `${orbit * 140}px`,
          }}
        />
      ))}
      
      {/* Skills distributed on orbits */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const orbitIndex = index % 3;
        const radius = (orbitIndex + 1) * 70;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.2 }}
            className="absolute px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {skill}
          </motion.div>
        );
      })}
    </div>
  );
}
