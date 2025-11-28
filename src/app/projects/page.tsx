"use client";

import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/config/site";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured" | "frontend" | "full-stack">("all");

  const filteredProjects = projects.filter(project => {
    if (filter === "featured") return project.featured;
    if (filter === "frontend") return project.category === "Frontend";
    if (filter === "full-stack") return project.category === "Full-Stack";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title mb-4">Projects</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Things I've built and contributed to
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`btn px-4 ${
              filter === "all"
                ? "btn-primary"
                : "border border-border bg-card hover:bg-muted"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`btn px-4 ${
              filter === "featured"
                ? "btn-primary"
                : "border border-border bg-card hover:bg-muted"
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`btn px-4 ${
              filter === "frontend"
                ? "btn-primary"
                : "border border-border bg-card hover:bg-muted"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("full-stack")}
            className={`btn px-4 ${
              filter === "full-stack"
                ? "btn-primary"
                : "border border-border bg-card hover:bg-muted"
            }`}
          >
            Full-Stack
          </button>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}