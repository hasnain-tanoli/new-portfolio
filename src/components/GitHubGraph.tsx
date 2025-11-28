"use client";

import { useEffect, useState } from "react";

export default function GitHubGraph() {
  const [contributions, setContributions] = useState<number[][]>([]);

  // Generate mock contribution data
  useEffect(() => {
    const weeks = 52;
    const days = 7;
    const data = [];
    
    for (let i = 0; i < weeks; i++) {
      const week = [];
      for (let j = 0; j < days; j++) {
        // Random contribution level (0-4)
        week.push(Math.floor(Math.random() * 5));
      }
      data.push(week);
    }
    
    setContributions(data);
  }, []);

  // Contribution colors from GitHub
  const getContributionColor = (level: number) => {
    const colors = [
      "bg-gray-800",      // No contributions
      "bg-green-900/30",  // Light green
      "bg-green-700/50",  // Medium green
      "bg-green-600/70",  // Medium-dark green
      "bg-green-500"      // Dark green
    ];
    return colors[level];
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">GitHub Contributions</h3>
      <div className="flex flex-col space-y-1">
        <div className="flex space-x-1">
          {contributions.slice(0, 10).map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          1,234 contributions in the last year
        </p>
      </div>
    </div>
  );
}