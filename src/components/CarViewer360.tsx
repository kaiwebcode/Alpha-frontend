"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";

interface Car {
  name: string;
  images: string[];
}

export default function CarViewer360({ car }: { car: Car }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartX(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;
      setRotation((prev) => (prev + diff * 0.5) % 360);
      setStartX(e.clientX);
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      setRotation((prev) => (prev + diff * 0.5) % 360);
      setStartX(e.touches[0].clientX);
    };

    container.addEventListener("mousedown", handleMouseDown as any);
    container.addEventListener("touchstart", handleTouchStart as any);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove as any);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown as any);
      container.removeEventListener("touchstart", handleTouchStart as any);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove as any);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, startX]);

  const imageIndex =
    Math.floor(Math.abs((rotation / 360) * car.images.length)) %
    car.images.length;
  const angle = Math.round((imageIndex / car.images.length) * 360);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none
                 bg-gradient-to-br from-[#1a1a1d]/90 via-[#111]/50 to-[#0c0c0f]/50 overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(124,58,237,0.15)] border border-purple-900"
    >
      <img
        src={car.images[imageIndex] || "/placeholder.svg"}
        alt={`360° view - angle ${angle}°`}
        className="w-full h-full object-cover transition-all duration-150 ease-out"
        draggable="false"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Drag Info */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#1a1a1d]/70 backdrop-blur-lg px-6 py-3 rounded-full text-purple-300 text-sm font-semibold border border-purple-700 flex items-center gap-3 shadow-2xl">
        <svg
          className="w-5 h-5 text-purple-400 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4"
          />
        </svg>
        <span>Drag to rotate</span>
      </div>

      {/* Rotation Display */}
      <div className="absolute bottom-8 right-8 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-lg px-6 py-3 rounded-xl text-white text-sm font-bold border border-purple-500 shadow-2xl shadow-purple-400/30">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          <span>{Math.abs(Math.round(rotation % 360)).toString().padStart(3, "0")}°</span>
        </div>
      </div>

      {/* Rotation Dial */}
      <div className="absolute top-8 left-8 w-12 h-12 rounded-full border-2 border-purple-700 flex items-center justify-center">
        <div
          className="w-10 h-10 rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-600 transition-transform duration-100"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}
