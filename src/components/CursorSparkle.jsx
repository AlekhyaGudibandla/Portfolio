// components/CursorSparkle.jsx
import React, { useEffect } from "react";

export default function CursorSparkle() {
  useEffect(() => {
    const trail = [];
    const maxTrail = 20;

    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "sparkle-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      document.body.appendChild(dot);
      trail.push(dot);

      if (trail.length > maxTrail) {
        const oldDot = trail.shift();
        oldDot.remove();
      }

      setTimeout(() => dot.remove(), 500);
    };

    const handleMove = (e) => createDot(e.pageX, e.pageY);
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
