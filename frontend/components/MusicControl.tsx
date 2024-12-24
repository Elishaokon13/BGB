"use client";

import { useSound } from "@/hooks/useSound";
import { useEffect } from "react";

export function MusicControl() {
  const { isMusicPlaying, toggleMusic, hasInteracted, playBell } = useSound();

  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasInteracted) {
        toggleMusic();
      }
    };

    document.addEventListener("click", handleFirstClick, { once: true });

    // Add global click handler for bell sound
    const handleClick = () => {
      playBell();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
      document.removeEventListener("click", handleClick);
    };
  }, [hasInteracted, toggleMusic, playBell]);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleMusic();
      }}
      className="fixed bottom-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors music-control"
    >
      {isMusicPlaying ? "🔇" : "🔊"}
    </button>
  );
}
