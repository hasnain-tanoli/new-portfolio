"use client";

import { FaCircle, FaCodeBranch } from "react-icons/fa";

export default function CommitHistory() {
  const commits = [
    { id: 1, message: "feat: add new portfolio section", time: "2 hours ago", branch: "main" },
    { id: 2, message: "fix: resolve mobile responsiveness", time: "1 day ago", branch: "dev" },
    { id: 3, message: "docs: update README with new features", time: "3 days ago", branch: "main" },
    { id: 4, message: "style: improve dark mode contrast", time: "1 week ago", branch: "ui-updates" },
  ];

  return (
    <div className="space-y-3">
      {commits.map((commit, index) => (
        <div key={commit.id} className="flex items-start">
          <div className="flex flex-col items-center mr-3">
            <FaCircle className="text-accent text-xs" />
            {index < commits.length - 1 && (
              <div className="w-px h-8 bg-border mt-1"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="text-sm font-mono text-accent mr-2">{commit.branch}</span>
              <FaCodeBranch className="text-muted-foreground text-xs" />
            </div>
            <p className="text-sm">{commit.message}</p>
            <p className="text-xs text-muted-foreground">{commit.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}