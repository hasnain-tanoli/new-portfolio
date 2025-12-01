"use client";

import { useEffect, useState } from "react";
import { fetchGitHubContributions, GitHubContributionData } from "@/services/github";

export default function GitHubGraph() {
  const [contributions, setContributions] = useState<GitHubContributionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch real GitHub contribution data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubContributions();
        setContributions(data);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Contribution colors from GitHub
  const getContributionColor = (level: number) => {
    if (level === 0) return "bg-gray-800";
    if (level < 5) return "bg-green-900/30";
    if (level < 10) return "bg-green-700/50";
    if (level < 15) return "bg-green-600/70";
    return "bg-green-500";
  };

  if (loading) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">GitHub Contributions</h3>
        <div className="flex space-x-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-1">
              {[...Array(7)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-sm bg-gray-700 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Loading contributions...
        </p>
      </div>
    );
  }

  if (!contributions) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">GitHub Contributions</h3>
        <p className="text-muted-foreground">Unable to load contribution data</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">GitHub Contributions</h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-1 min-w-full">
          {contributions.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-2 h-2 rounded-sm ${getContributionColor(day.contributionCount)}`}
                  title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        {contributions.totalContributions.toLocaleString()} contributions in the last year
      </p>
    </div>
  );
}