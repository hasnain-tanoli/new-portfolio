"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="card h-full flex flex-col"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm font-medium flex-1"
          >
            <FaExternalLinkAlt size={12} />
            <span>Live Demo</span>
          </Link>
        )}
        {sourceUrl && (
          <Link
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors text-sm font-medium flex-1"
          >
            <FaCode size={12} />
            <span>Source</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}