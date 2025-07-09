"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  isMobile: boolean;
}

export default function CustomCursor({ isMobile }: CustomCursorProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    if (!mounted || isMobile) return;

    // Check if it's a touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Handle hover states
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic], input, textarea",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [mounted, isMobile]);

  // Don't render if not mounted or on mobile
  if (!mounted || isMobile) return null;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={`rounded-full border-2 ${
            isHovering
              ? "w-8 h-8 border-kawachi-accent bg-kawachi-accent/20"
              : "w-6 h-6 border-kawachi-primary bg-kawachi-primary/10"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 30px rgba(255, 0, 255, 0.6)"
              : "0 0 20px rgba(0, 255, 255, 0.5)",
          }}
        />
      </motion.div>

      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] ${isVisible ? "opacity-60" : "opacity-0"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -2, 2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`rounded-full ${
            isHovering
              ? "w-4 h-4 bg-kawachi-accent"
              : "w-3 h-3 bg-kawachi-primary"
          }`}
          style={{
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
          }}
        />
      </motion.div>
    </>
  );
}
