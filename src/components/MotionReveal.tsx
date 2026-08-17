"use client";

import React, { useEffect, useRef, useState } from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "scale";
  delay?: number; // in milliseconds
  duration?: number; // in seconds
  className?: string;
  threshold?: number;
}

export default function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: MotionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translate3d(-60px, 0, 0)";
      case "right":
        return "translate3d(60px, 0, 0)";
      case "down":
        return "translate3d(0, -50px, 0)";
      case "scale":
        return "scale(0.92)";
      case "up":
      default:
        return "translate3d(0, 50px, 0)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "850ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
