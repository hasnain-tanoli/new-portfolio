"use client";

import { useEffect, useState } from "react";
import { fetchGitHubStats, GitHubStats as GitHubStatsType } from "@/services/github";
import { FaUsers, FaStar, FaCodeBranch } from "react-icons/fa";

export default function GitHubStatsComponent() {
  const [stats, setStats] = useState<GitHubStatsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card flex flex-col items-center p-4">
            <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse mb-2" />
            <div className="w-16 h-4 bg-gray-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="card p-4 text-center">
        <p className="text-muted-foreground">Unable to load GitHub stats</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card flex flex-col items-center p-4">
        <FaUsers className="text-accent text-xl mb-2" />
        <p className="text-2xl font-bold">{stats.followers.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">Followers</p>
      </div>
      <div className="card flex flex-col items-center p-4">
        <FaStar className="text-accent text-xl mb-2" />
        <p className="text-2xl font-bold">{stats.total_stars.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">Stars</p>
      </div>
      <div className="card flex flex-col items-center p-4">
        <FaCodeBranch className="text-accent text-xl mb-2" />
        <p className="text-2xl font-bold">{stats.public_repos.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">Repositories</p>
      </div>
    </div>
  );
}