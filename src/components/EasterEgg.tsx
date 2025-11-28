"use client";

import { useEffect } from "react";

export default function EasterEgg() {
  useEffect(() => {
    const showMessage = () => {
      console.log(
        `%cHey there, fellow developer! 👋
        
Thanks for checking out my portfolio!
        
%cIf you're interested in the code behind this site, feel free to check out the GitHub repo.
        
%cHappy coding! 🚀`,
        "font-size: 16px; font-weight: bold; color: #22d3ee;",
        "font-size: 14px; color: #a1a1aa;",
        "font-size: 14px; color: #4ade80;"
      );
    };

    // Show message after a short delay
    const timer = setTimeout(showMessage, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}