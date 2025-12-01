"use client";

import { FaCog } from "react-icons/fa";

export default function RotatingGear({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`inline-block animate-spin ${className}`}>
      <FaCog size={size} className="text-accent" />
    </div>
  );
}