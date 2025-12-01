"use client";

import { useState, useEffect } from "react";

export default function CodeTyping() {
  const codeLines = [
    "const greeting = 'Hello World';",
    "console.log(greeting);",
    "// Output: Hello World",
  ];
  
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    const handleTyping = () => {
      const currentText = codeLines[currentLine];
      
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next line
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % codeLines.length);
          if (currentLine === codeLines.length - 1) {
            setLoopCount((prev) => prev + 1);
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentLine, codeLines]);

  return (
    <div className="font-mono text-sm">
      <div className="flex items-center mb-1">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="bg-gray-900 rounded-lg p-4 border border-accent/20">
        <div className="text-accent">{displayText}<span className="animate-pulse">|</span></div>
      </div>
    </div>
  );
}