"use client";

import { motion } from "framer-motion";
import GitHubGraph from "@/components/GitHubGraph";
import { siteConfig, skills, experiences, education, uses } from "@/config/site";

export default function InfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title mb-12">About</h1>

        {/* About Section */}
        <div className="card mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="body-text mb-4">
                Hello! I'm {siteConfig.name}, a passionate full-stack developer with experience 
                building modern web applications. I specialize in React, Next.js, Node.js, and creating 
                intuitive user experiences.
              </p>
              <p className="body-text mb-4">
                My journey in tech began with a curiosity for how things work, which led me to explore 
                web development. Since then, I've had the opportunity to work with clients worldwide, 
                helping them bring their digital products to life.
              </p>
              <p className="body-text">
                When I'm not coding, you can find me contributing to open source projects, 
                writing technical articles, or exploring new technologies.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Graph */}
        <div className="mb-16">
          <GitHubGraph />
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-muted-foreground mb-2">{job.role} · {job.period}</p>
                <p className="body-text mb-3">{job.description}</p>
                <ul className="space-y-1">
                  {job.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <span className="text-success mr-2">●</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Languages",
                  skills: skills.languages
                },
                {
                  category: "Frontend",
                  skills: skills.frontend
                },
                {
                  category: "Backend",
                  skills: skills.backend
                },
                {
                  category: "Tools",
                  skills: skills.tools
                }
              ].map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uses Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Uses</h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Hardware</h3>
                <ul className="space-y-2">
                  {uses.hardware.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-success mr-2">●</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Software</h3>
                <ul className="space-y-2">
                  {uses.software.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-success mr-2">●</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">VS Code Setup</h3>
                <ul className="space-y-2">
                  {uses.vscodeSetup.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-success mr-2">●</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="card">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground mb-2">{edu.degree} · {edu.period}</p>
                <p className="body-text">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}