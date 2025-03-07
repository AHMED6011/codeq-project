import Image from "next/image";
import Services from "../components/Services/Services";
import styles from "./page.module.css";
import Link from "next/link";
import HeroBg from "../components/HeroBg";
import AboutUs from "../components/AboutUs/AboutUs";
export default function Home() {
  return (
    <>
      <HeroBg />
      <main className={styles.main}>
        <div
          style={{
            width: "763px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <p
            className="fw-semibold text-center fs-5 lh-base"
            style={{ color: "#BE4423" }}
          >
            مرحبًا بك في CODEQ – حيث نلتقي بالإبداع والتقنية
          </p>
          <h1
            className="fw-medium text-center"
            style={{ fontSize: "58px", lineHeight: "76px" }}
          >
            معًا نصنع مستقبل التقنية بأفكار جديدة وحلول مبتكرة
          </h1>
          <p
            className="fw-semibold text-center fs-6"
            style={{ lineHeight: "24px", color: "rgba(173, 173, 173, 1)" }}
          >
            في CODEQ، نجمع بين شغف الإبداع وقوة التكنولوجيا لتقديم حلول مبتكرة
            تُحدث فرقًا حقيقيًا. نقدم خدمات متكاملة تشمل تطوير البرمجيات، تصميم
            واجهات المستخدم وتجربة المستخدم، والاستشارات التقنية،{" "}
          </p>
          <div
            style={{
              height: "54px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              borderRadius: "42px",
              width: "256px",
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
              <button
                style={{
                  backgroundColor: "#BE4423",
                  width: "114px",
                  height: "34px",
                  borderRadius: "42px",
                  border: "none",
                  color: "white",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                قدم طلبك
              </button>
              <Link
                href="/"
                style={{
                  margin: "0",
                  gap: "5px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                انضم كمتطوع
                <Image
                  src="/images/leftArrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Services />
      <AboutUs />
    </>
  );
}
