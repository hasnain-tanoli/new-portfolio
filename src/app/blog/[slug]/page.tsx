"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { blogPosts } from "@/config/site";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.slug === params.slug);
  
  // If no post found, return 404
  if (!blogPost) {
    notFound();
  }

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <ReadingProgressBar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back to Blog Link */}
          <Link 
            href="/blog" 
            className="link-animated text-accent font-medium mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="hero-title mb-4">{blogPost.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>·</span>
              <span>{blogPost.readTime} read</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <article className="prose prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground max-w-none">
            <p>{blogPost.excerpt}</p>
            <p>This is a placeholder for the full blog post content. In a real implementation, this would be populated with the actual content of the blog post.</p>
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h2>Main Content</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h2>Conclusion</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-xl font-semibold mb-4">Share</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Twitter", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Copy Link", action: () => copyToClipboard(window.location.href) },
              ].map((social) => (
                <button
                  key={social.name}
                  onClick={social.action}
                  className="btn border border-border bg-card hover:bg-muted"
                >
                  {social.name}
                  {copied && social.name === "Copy Link" && (
                    <span className="ml-2 text-success">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Read Next Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-xl font-semibold mb-4">Read Next</h2>
            <div className="flex justify-between">
              <Link href="#" className="link-animated text-accent font-medium">
                ← Previous Post
              </Link>
              <Link href="#" className="link-animated text-accent font-medium">
                Next Post →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}