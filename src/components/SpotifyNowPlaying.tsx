"use client";

import { useState, useEffect } from "react";

export default function SpotifyNowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState({
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
  });

  // Simulate Spotify integration
  useEffect(() => {
    // In a real implementation, this would connect to Spotify's API
    const interval = setInterval(() => {
      setIsPlaying(prev => !prev);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card flex items-center space-x-4">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 17V7" />
            <path d="M12 7L8 11" />
            <path d="M12 7L16 11" />
          </svg>
        </div>
        {isPlaying && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-background rounded-full"></div>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">{track.name}</h3>
        <p className="text-sm text-muted-foreground truncate">
          {track.artist} · {track.album}
        </p>
      </div>
      <button 
        className="text-muted-foreground hover:text-foreground"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
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
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
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
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>
    </div>
  );
}