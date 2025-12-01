"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");
  
  useEffect(() => {
    // Update time immediately
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  const socialLinks = [
    { name: "GitHub", url: siteConfig.links.github, icon: <FaGithub size={24} /> },
    { name: "LinkedIn", url: siteConfig.links.linkedin, icon: <FaLinkedinIn size={24} /> },
    { name: "Twitter", url: siteConfig.links.twitter, icon: <FaTwitter size={24} /> },
    { name: "Email", url: siteConfig.links.email, icon: <FaEnvelope size={24} /> },
  ];

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Info */}
          <div className="space-y-4">
            <div className="text-xl font-bold">{siteConfig.name}</div>
            <p className="text-muted-foreground text-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="mr-2">🟢</span>
              <span>{siteConfig.available ? "Available for work" : "Not available"}</span>
            </div>
            <SpotifyNowPlaying />
          </div>
          
          {/* Connect Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-12 h-12 flex items-center justify-center p-0"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Time and Last Updated */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Time</h3>
            <div className="text-muted-foreground">
              {currentTime && <p>{currentTime} UTC</p>}
              <p className="text-sm mt-2">Last updated: Today</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}