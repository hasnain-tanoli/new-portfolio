"use client";

import BlogCard from "@/components/BlogCard";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/config/site";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Thoughts on code, design, and life
        </p>

        {/* Search Input */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full p-4 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`btn px-4 py-2 text-sm ${
              selectedTag === null
                ? "btn-primary"
                : "border border-border bg-card hover:bg-muted"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`btn px-4 py-2 text-sm ${
                tag === selectedTag
                  ? "btn-primary"
                  : "border border-border bg-card hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                readTime={post.readTime}
                slug={post.slug}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}