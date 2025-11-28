"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Prevent division by zero
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(scrolled);
    };

    // Set initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure width is between 0 and 100
  const clampedWidth = Math.min(Math.max(width, 0), 100);

  // Only render the progress bar when there's actual progress to show
  if (clampedWidth === 0) {
    return null;
  }

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-100 ease-linear"
      style={{ width: `${clampedWidth}%` }} 
    />
  );
}