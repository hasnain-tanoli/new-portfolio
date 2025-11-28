"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if modifier key is pressed (Cmd/Ctrl)
      if (!e.metaKey && !e.ctrlKey) return;

      // Check if G key is pressed
      if (e.key.toLowerCase() === "g") {
        // Prevent default browser behavior
        e.preventDefault();

        // Listen for the next key press
        const handleNextKeyPress = (e2: KeyboardEvent) => {
          e2.preventDefault();
          
          switch (e2.key.toLowerCase()) {
            case "h":
              router.push("/");
              break;
            case "p":
              router.push("/projects");
              break;
            case "b":
              router.push("/blog");
              break;
            case "i":
              router.push("/info");
              break;
            case "c":
              router.push("/contact");
              break;
            default:
              break;
          }

          // Remove the event listener after handling
          window.removeEventListener("keydown", handleNextKeyPress);
        };

        // Add event listener for the next key press
        window.addEventListener("keydown", handleNextKeyPress);

        // Remove the event listener after 2 seconds if no key is pressed
        const timeout = setTimeout(() => {
          window.removeEventListener("keydown", handleNextKeyPress);
        }, 2000);

        // Clean up the timeout on unmount
        return () => clearTimeout(timeout);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null; // This component doesn't render anything
}