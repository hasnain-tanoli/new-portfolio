"use client";

import { motion } from "framer-motion";

export default function WaveEmoji() {
  return (
    <motion.span
      className="inline-block"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      👋
    </motion.span>
  );
}