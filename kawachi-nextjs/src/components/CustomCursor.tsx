"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
  isMobile: boolean;
}

export default function CustomCursor({ isMobile }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Use Framer Motion values for smooth, hardware-accelerated animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Optimized spring configuration for 60fps
  const springConfig = { damping: 25, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail follows with more delay for smooth effect
  const trailSpringConfig = { damping: 30, stiffness: 400, mass: 0.3 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  // Velocity tracking for future enhancements
  // const velocityX = useTransform(cursorXSpring, (value) => value - lastMousePosition.current.x);
  // const velocityY = useTransform(cursorYSpring, (value) => value - lastMousePosition.current.y);

  const updateCursorPosition = useCallback(
    (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Enhanced mobile detection
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;

    if (isMobile || isTouchDevice || isSmallScreen) {
      // Ensure cursor is visible on mobile devices
      document.body.style.cursor = "auto";
      return;
    }

    // Use passive listeners for better performance
    const options = { passive: true };

    document.addEventListener("mousemove", updateCursorPosition, options);
    document.addEventListener("mouseenter", handleMouseEnter, options);
    document.addEventListener("mouseleave", handleMouseLeave, options);

    // Handle hover states for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic], .feature-card, .ecosystem-card, input, textarea",
    );

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart, options);
      el.addEventListener("mouseleave", handleHoverEnd, options);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [isMobile, updateCursorPosition, handleMouseEnter, handleMouseLeave]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          transform: "translateZ(0)", // Force GPU acceleration
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
              ? "0 0 40px rgba(255, 0, 255, 0.8), 0 0 80px rgba(255, 0, 255, 0.4)"
              : "0 0 20px rgba(0, 255, 255, 0.6)",
            filter: "brightness(1.2) contrast(1.1)",
            willChange: "transform",
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.1,
          }}
        />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        ref={trailRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen transition-opacity duration-300 ${
          isVisible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <motion.div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? "w-4 h-4 bg-kawachi-accent"
              : "w-3 h-3 bg-kawachi-primary"
          }`}
          style={{
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
            willChange: "transform",
          }}
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      {/* Gravity Well Effect */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9997] transition-opacity duration-300 ${
          isVisible && isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <motion.div
          className="w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, transparent 20%, rgba(0, 255, 255, 0.05) 40%, rgba(255, 0, 255, 0.05) 60%, transparent 90%)",
            willChange: "transform",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Ripple Effects on Click */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        onClick={(e) => {
          e.preventDefault();
          // Create ripple effect
          const ripple = document.createElement("div");
          ripple.className =
            "absolute w-2 h-2 bg-kawachi-primary rounded-full pointer-events-none";
          ripple.style.left = "50%";
          ripple.style.top = "50%";
          ripple.style.transform = "translate(-50%, -50%)";
          ripple.style.animation = "rippleExpand 0.6s ease-out forwards";
          e.currentTarget.appendChild(ripple);

          setTimeout(() => {
            ripple.remove();
          }, 600);
        }}
      />
    </>
  );
}
