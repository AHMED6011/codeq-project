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
    <div className="my-5 text-center">
      <h1   data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300" className="text-center" style={{marginTop:"150px"}}>آراء عملائنا</h1>
      <p    data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300" style={{ maxWidth: "611px", margin: "auto", fontWeight: "600" }}>
        من خلال تعاوننا مع عملائنا، تمكنا من تحقيق رؤاهم وتحويلها إلى نتائج
        ملموسة. اكتشف كيف أسهمت خدماتنا في نجاح مشاريعهم وتحقيق أهدافهم
      </p>
      <div
        style={{
          marginTop: "50px",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />

      </div>
    </div>
  );
}
