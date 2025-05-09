"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const router = useRouter();
  return (
    <nav
      className={`${styles.header_styles} navbar navbar-expand-lg mx-auto mt-3 `}
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "95%", margin: "0 auto" }}
      >
        <Link href="/" className="d-lg-flex d-none">
          <Image src="/images/logo.png" alt="logo" width={112} height={25} />
        </Link>
        <button
          className={`${styles.navbar_bars} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
        <Link
          href="/"
          className="d-flex d-lg-none"
          style={{ marginLeft: "-48px" }}
        >
          <Image src="/images/logo.png" alt="logo" width={80} height={18} />
        </Link>

        <div className="d-lg-flex d-none">
          <div
            className="collapse text-center align-items-center justify-content-center navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ color: "#BE4423" }}
                  aria-current="page"
                  href="/"
                >
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link text-white text-lg">
                  من نحن
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link text-white text-lg">
                  خدماتنا
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-lg" href="#projects">
                  المشاريع
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-lg" href="#gallery">
                  المعرض
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-lg" href="#blogs">
                  المدونة
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-lg" href="#join_us">
                  انضم إلينا
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`${styles.contact_us} btn btn-outline-white text-white border-white`}
          type="submit"
        >
          تواصل معنا
        </button>
      </div>
      <div
        className="d-flex d-lg-none justify-content-center"
        style={{ width: "100%" }}
      >
        <div
          className="collapse text-center align-items-center justify-content-center navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "#BE4423" }}
                aria-current="page"
                href="/"
              >
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link text-white text-lg">
                من نحن
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link text-white text-lg">
                خدماتنا
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#projects">
                المشاريع
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#gallery">
                المعرض
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#blogs">
                المدونة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#join_us">
                انضم إلينا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
