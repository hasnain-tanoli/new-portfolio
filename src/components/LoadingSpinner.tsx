"use client";

export default function LoadingSpinner() {
  return (
    <div className="inline-flex space-x-1 animate-spin">
      <span className="text-accent">{'<'}</span>
      <span className="text-accent">/</span>
      <span className="text-accent">{'>'}</span>
    </div>
  );
}