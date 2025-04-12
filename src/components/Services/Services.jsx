"use client";
import styles from "./services.module.css";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Services() {
  return (
    <div id="services" className="text-center px-3">
      <p
        style={{
          fontSize: "40px",
          fontWeight: "500",
          lineHeight: "40px",
        }}
      >
        تعرّف على ما نتميز به من خدمات
      </p>

      <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 my-5">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className={`${styles.services_stroke} ${styles.hover_effect}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "50px",
              alignItems: "center",
              width: "100%",
              maxWidth: "370px",
              height: "320px",
              backgroundColor: "rgba(37, 46, 61, 0.39)",
              borderRadius: "24px",
              textAlign: "center",
              padding: "20px",
              margin: "10px",
            }}
          >
            <div
            className= {`${styles.services_img}`}
              style={{
                border: "1px solid #545a62",
                borderRadius: "50%",
                width: "94px",
                height: "94px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/services.png"
                alt="services"
                width={50}
                height={38}
              />
            </div>
            <div
              data-aos-anchor-placement="center-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <p style={{ fontWeight: "500", fontSize: "20px" }}>
                التعليم والتدريب
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "rgba(173, 173, 173, 1)",
                }}
              >
                تقديم دورات وبرامج تعليمية في البرمجة والتقنية
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
