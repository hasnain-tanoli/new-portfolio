"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchGitHubRepos, GitHubRepo } from "@/services/github";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubRepos();
        setRepos(data.slice(0, 6)); // Show only top 6 repos
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="w-32 h-5 bg-gray-700 rounded animate-pulse" />
              <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse" />
            </div>
            <div className="w-full h-4 bg-gray-700 rounded animate-pulse mb-3" />
            <div className="w-24 h-4 bg-gray-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="card p-4 text-center">
        <p className="text-muted-foreground">No public repositories found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <div key={repo.id} className="card p-4 hover:bg-muted/50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <Link 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline flex items-center"
            >
              {repo.name}
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </Link>
            {repo.stargazers_count > 0 && (
              <div className="flex items-center text-sm text-muted-foreground">
                <FaStar className="mr-1 text-yellow-500" />
                <span>{repo.stargazers_count}</span>
              </div>
            )}
          </div>
          
          {repo.description && (
            <p className="text-muted-foreground text-sm mb-3">
              {repo.description}
            </p>
          )}
          
          <div className="flex justify-between items-center">
            {repo.language && (
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                {repo.language}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              Updated {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}