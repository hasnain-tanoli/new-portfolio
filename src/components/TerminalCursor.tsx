"use client";

import { useState, useEffect } from "react";

export default function TerminalCursor() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-2 h-5 bg-accent ml-1 align-middle">
      {isVisible && (
        <style jsx>{`
          span {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      )}
    </span>
  );
}