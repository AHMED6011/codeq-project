"use client"; // If using Next.js App Router (app directory)

import { useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image"; 
export default function HeroBg() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Normalize the mouse position (-1 to 1)
    const xMove = ((clientX - left) / width - 0.5) * 20; // Adjust intensity
    const yMove = ((clientY - top) / height - 0.5) * 20;

    setPosition({ x: xMove, y: yMove });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Reset on mouse leave
  };

  return (

      <div
        className={styles.hero_bg}
      >
        <div className="left"   
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
        <div className="right" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
      </div>
  );
}
