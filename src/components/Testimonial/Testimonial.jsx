"use client";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./testimonial.module.css";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
    className="testimonial-container"
    style={{
      marginTop: "50px",
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
    }}
  >
    <div
      className="testimonial-slider"
      style={{
        position: "absolute",
        transform: `translateX(${activeIndex * 33.33}%)`,
        transition: "transform 0.5s ease-in-out",
        display: "flex",
        gap: "40px",
        width: "300%",
      }}
    >
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      </div>
    </div>
  );
}
