import Image from "next/image";
import styles from "./testimonial.module.css";
import img1 from "../../../public/images/customer.png";

export default function TestimonialCard() {
  return (
    <div
      className={styles.testimonial}
      style={{
        minWidth: "1059px",
        height: "364px",
        backgroundColor: "#252E3D63",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "15px",
      }}
    >
      <Image
        className={styles.testimonialImg}
        src={img1}
        alt="customer"
        width={269}
        height={336}
        style={{
          width: "269px",
          height: "336px",
        }}
      />
      <div
        style={{
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          {[...Array(5)].map((_, starIndex) => (
            <svg
              key={starIndex}
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5676 1.40576C10.8976 0.554273 12.1024 0.554272 12.4324 1.40576L14.6791 7.20241C14.8209 7.56849 15.1639 7.81767 15.5559 7.83948L21.7631 8.18491C22.6749 8.23565 23.0472 9.38148 22.3394 9.95847L17.5207 13.8864C17.2164 14.1345 17.0854 14.5377 17.1858 14.9172L18.7754 20.9274C19.0089 21.8102 18.0342 22.5184 17.2667 22.0235L12.0419 18.6544C11.712 18.4417 11.288 18.4417 10.9581 18.6544L5.73331 22.0235C4.96583 22.5184 3.99113 21.8102 4.22463 20.9274L5.81424 14.9172C5.91463 14.5377 5.78362 14.1345 5.47931 13.8864L0.66062 9.95847C-0.0472127 9.38148 0.325089 8.23565 1.23688 8.18491L7.44408 7.83948C7.83608 7.81767 8.17905 7.56849 8.32094 7.20241L10.5676 1.40576Z"
                fill="#FF9125"
              />
            </svg>
          ))}
        </div>
        <p className={styles.p1} style={{ fontSize: "20px", fontWeight: "500" }}>
          نور الدين القحطاني
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "24px",
          }}
        >
          "شركة CODEQ قدمت لي تجربة استثنائية! 🤩 جودة خدماتهم واهتمامهم
          بالتفاصيل يجعلهم الخيار الأول لأي مشروع. أشكر فريقهم الرائع على الدعم
          المتواصل والاحترافية العالية! 💡👏"{" "}
        </p>
      </div>
    </div>
  );
}
