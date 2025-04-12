"use client";
import { useState } from "react";

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
      <h1 className="text-center" style={{marginTop:"150px"}}>لحظات توثق مسيرتنا</h1>
      <p style={{ fontWeight: "600", marginTop: "20px" }}>
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
        <div
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
              style={{
                backgroundColor:
                  activeButton === button ? "#BE4423" : "transparent",
                // width: "92px",
                // height: "34px",
                borderRadius: "42px",
                border: "none",
                color: "white",
                fontSize: "16px",
                lineHeight: "24px",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
                padding: "4px 16px",
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
