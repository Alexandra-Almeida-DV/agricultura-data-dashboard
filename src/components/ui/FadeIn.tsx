"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} // Começa levemente abaixo
    whileInView={{ opacity: 1, y: 0 }} // Sobe e aparece ao scrollar
    viewport={{ once: true, margin: "-50px" }} // Anima apenas uma vez quando entra na tela
    transition={{ 
      duration: 0.6, 
      delay: delay, 
      ease: "easeOut" 
    }}
    className="w-full h-full"
  >
    {children}
  </motion.div>
);