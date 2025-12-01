"use client";

export default function PulsingBrackets() {
  return (
    <div className="inline-flex items-center space-x-1">
      <span className="text-accent animate-pulse">{'{'}</span>
      <span className="text-accent animate-pulse" style={{ animationDelay: '0.2s' }}>{'}'}</span>
    </div>
  );
}