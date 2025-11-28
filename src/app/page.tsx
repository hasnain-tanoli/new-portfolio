"use client";

import WaveEmoji from "@/components/WaveEmoji";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, projects, blogPosts } from "@/config/site";

export default function Home() {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Get recent blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      {/* Hero Section */}
      <motion.section 
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-title mb-6">
          Hi, I'm <span className="text-accent">{siteConfig.name}</span> <WaveEmoji />
        </h1>
        <p className="subtitle mb-2">{siteConfig.title} based in {siteConfig.location}</p>
        <p className="body-text text-muted-foreground max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="/blog" className="btn border border-border bg-card hover:bg-muted">
            Read Blog
          </Link>
        </div>
      </motion.section>

      {/* Currently Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="section-title mb-6">Currently</h2>
        <div className="card">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-success mr-2">●</span>
              <span>
                {siteConfig.available ? (
                  <span className="flex items-center">
                    <span className="mr-2">🟢</span> Available for work
                  </span>
                ) : (
                  "Not available for work"
                )}
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-success mr-2">●</span>
              <span>Building modern web applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-success mr-2">●</span>
              <span>Learning new technologies</span>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/projects" className="link-animated text-accent font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tech}
              demoUrl={project.live}
              sourceUrl={project.github}
            />
          ))}
        </div>
      </motion.section>

      {/* Recent Posts */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Recent Posts</h2>
          <Link href="/blog" className="link-animated text-accent font-medium">
            View All →
          </Link>
        </div>
        <div className="space-y-6">
          {recentPosts.map((post) => (
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
      </motion.section>

      {/* Connect Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="section-title mb-6">Connect</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "GitHub", url: siteConfig.links.github },
            { name: "LinkedIn", url: siteConfig.links.linkedin },
            { name: "Twitter", url: siteConfig.links.twitter },
            { name: "Email", url: siteConfig.links.email },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-6"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
}