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
      <h1 className="text-center" style={{ marginTop: "150px" }}>
        لحظات توثق مسيرتنا
      </h1>
      <p style={{ fontWeight: "600", marginTop: "20px" }}>
        استمتع بمشاهدة أبرز اللحظات من فعالياتنا السابقة، ورش العمل، والمعارض
        التي شاركنا بها، حيث يلتقي الإبداع والشغف في كل صورة ومقطع فيديو.
      </p>
      <div className={styles.gallery}>
        <div className={styles.gallery_buttons}>
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
      <div
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
