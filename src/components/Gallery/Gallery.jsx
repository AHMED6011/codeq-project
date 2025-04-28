"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeButton, setActiveButton] = useState("الجميع");

  const buttons = ["الجميع", "معارض", "ورش عمل", "مقاطع فيديو"];
  const images = [
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
    "/images/blog.png",
  ];
  return (
    <div className="container mt-5 text-center">
      <h1   data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
             className="text-center" style={{marginTop:"150px"}}> </h1>
      <p    data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300"
             style={{ fontWeight: "600", marginTop: "20px" }}>
        استمتع بمشاهدة أبرز اللحظات من فعالياتنا السابقة، ورش العمل، والمعارض
        التي شاركنا بها، حيث يلتقي الإبداع والشغف في كل صورة ومقطع فيديو.
      </p>
      <div
        style={{
          height: "54px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px auto",
          borderRadius: "42px",
          width: "467px",
          backgroundColor: "black",
          border: "1px solid #1e1d1d",
        }}
      >
        <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="300"
          style={{
            gap: "10px",
            backgroundColor: "#1e1d1d",
            width: "98%",
            height: "46px",
            borderRadius: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              className={styles.buttons}
              style={{
                backgroundColor:
                  activeButton === button ? "#BE4423" : "transparent",
              }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
              display: "block",
              margin: "auto",
            }}
          />
        ))}
      </div>
    </div>
  );
}
