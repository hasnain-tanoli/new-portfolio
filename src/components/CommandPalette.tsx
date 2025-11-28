"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Navigation items
  const navigationItems = [
    { name: "Home", path: "/", keywords: "home landing" },
    { name: "Projects", path: "/projects", keywords: "work portfolio" },
    { name: "Blog", path: "/blog", keywords: "articles writing" },
    { name: "Info", path: "/info", keywords: "about experience" },
    { name: "Contact", path: "/contact", keywords: "email connect" },
  ];

  // Filter items based on search term
  const filteredItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Cmd/Ctrl + K to open/close
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setIsOpen(prev => !prev);
      setSearchTerm("");
    }

    // Escape to close
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchTerm("");
    }
  }, []);

  // Handle item selection
  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setSearchTerm("");
  };

  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen) {
      const searchInput = document.getElementById("command-palette-search");
      searchInput?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Palette */}
      <div className="relative w-full max-w-lg bg-card border border-border rounded-lg shadow-xl z-10">
        {/* Search Input */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="command-palette-search"
              type="text"
              placeholder="Type a command or search..."
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {filteredItems.length > 0 ? (
            <ul>
              {filteredItems.map((item) => (
                <li key={item.path}>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-accent/10 focus:bg-accent/10 focus:outline-none"
                    onClick={() => handleSelect(item.path)}
                  >
                    <div className="font-medium">{item.name}</div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No results found
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-3 border-t border-border text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}