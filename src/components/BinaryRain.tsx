"use client";

import { useState, useEffect } from "react";

export default function BinaryRain() {
  const [columns, setColumns] = useState<{ id: number; top: number }[]>([]);

  useEffect(() => {
    // Create columns
    const columnCount = Math.floor(window.innerWidth / 20);
    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      top: Math.random() * -100,
    }));
    setColumns(newColumns);

    // Animation interval
    const interval = setInterval(() => {
      setColumns(prev => 
        prev.map(col => ({
          ...col,
          top: col.top > 100 ? -100 : col.top + 0.5,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {columns.map(column => (
        <div
          key={column.id}
          className="absolute text-accent/10 text-xs font-mono"
          style={{
            left: `${(column.id * 100) / columns.length}%`,
            top: `${column.top}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {Math.round(Math.random())}
        </div>
      ))}
    </div>
  );
}