import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "", size = 42 }: BrandLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative group shrink-0 flex items-center justify-center ${className}`}
    >
      {/* Ambient background soft light glow for maximum contrast */}
      <div className="absolute inset-0 bg-white/25 rounded-xl blur-md opacity-70 group-hover:opacity-100 group-hover:bg-white/40 transition-all duration-300 pointer-events-none" />

      {/* Sleek Illuminated Glass Container */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-zinc-800/90 via-zinc-900/90 to-zinc-950/95 p-1.5 border border-white/30 shadow-lg shadow-black/80 flex items-center justify-center overflow-hidden group-hover:border-white/60 transition-all duration-300">
        {/* Subtle top-left light flare */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full blur-xs pointer-events-none" />

        {/* 3D Interlocking AS Logo with silver luminous brightness enhancement */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images/as_logo.png"
            alt="Ahmed Shoieb Logo"
            width={size * 2}
            height={size * 2}
            className="w-full h-full object-contain filter brightness-[2.3] contrast-[1.15] drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] group-hover:scale-110 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
}
