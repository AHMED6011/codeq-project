"use client"; 
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ParallaxStars() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50; // Adjust intensity
      const y = (clientY / window.innerHeight - 0.5) * 50;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "calc(100vh - 65px)",
        overflow: "hidden",
        zIndex: "-1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Star */}
      <Image
        src="/images/left_star.png"
        alt="left star"
        width={300}
        height={300}
        className="left"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Right Star */}
      <Image
        src="/images/right_star.png"
        alt="right star"
        width={300}
        height={300}
        className="right"
        style={{
          transform: `translate(${-position.x}px, ${-position.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}
