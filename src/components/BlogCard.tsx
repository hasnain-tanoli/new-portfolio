"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  slug,
  tags,
}: BlogCardProps) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${slug}`} className="block">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          {date} · {readTime}
        </div>
      </Link>
    </motion.div>
  );
}