"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
  isMobile: boolean;
}

export default function CustomCursor({ isMobile }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // IMPORTANT: All hooks must be called before any early returns
  // Use Framer Motion values for smooth animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail springs with different config
  const trailXSpring = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const trailYSpring = useSpring(cursorY, { damping: 30, stiffness: 200 });

  const updateCursorPosition = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if it's a touch device or mobile
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;

    if (isMobile || isTouchDevice || isSmallScreen) {
      // Ensure cursor is visible on mobile devices
      document.body.style.cursor = "auto";
      return;
    }

    // Hide default cursor and show custom cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, {
      passive: true,
    });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    // Handle hover states for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic], input, textarea, .kawachi-button",
    );

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart, { passive: true });
      el.addEventListener("mouseleave", handleHoverEnd, { passive: true });
    });

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mounted, isMobile, updateCursorPosition]);

  // Don't render on mobile or if not mounted
  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className={`rounded-full border-2 transition-all duration-200 ${
            isHovering
              ? "w-8 h-8 border-kawachi-accent bg-kawachi-accent/20"
              : "w-6 h-6 border-kawachi-primary bg-kawachi-primary/10"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 30px rgba(255, 0, 255, 0.6)"
              : "0 0 20px rgba(0, 255, 255, 0.5)",
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen transition-opacity duration-300 ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? "w-4 h-4 bg-kawachi-accent"
              : "w-3 h-3 bg-kawachi-primary"
          }`}
          style={{
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
          }}
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />
      </motion.div>
    </>
  );
}
