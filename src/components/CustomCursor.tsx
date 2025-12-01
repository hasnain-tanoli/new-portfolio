"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      setIsVisible(true);
    };

    const mouseEnterHandler = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1.5)";
      }
    };

    const mouseLeaveHandler = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", mouseEnterHandler);
      el.addEventListener("mouseleave", mouseLeaveHandler);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnterHandler);
        el.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Don't show custom cursor on touch devices
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease, opacity 0.3s ease",
        mixBlendMode: "difference",
      }}
    />
  );
}