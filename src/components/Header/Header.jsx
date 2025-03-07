"use client"
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <nav className={`${styles.header_background} fixed-top navbar navbar-expand-lg mx-auto mt-3 `}
          style={{width: "90%", borderRadius: "72px",padding: "5px 10px",heigth: "65px"}}>
      <div className="d-flex align-items-center justify-content-between" style={{width: "95%", margin: "0 auto"}}>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={112} height={25}/>
        </Link>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={{color: "#BE4423"}} aria-current="page" href="/">الصفحة الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link  href="#about" className="nav-link text-white text-lg">من نحن</Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link text-white text-lg" >خدماتنا</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#projects">المشاريع</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#gallery">المعرض</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#blogs">المدونة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-lg" href="#join_us">انضم إلينا</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-white text-white border-white" 
          style={{borderRadius: "20px",fontSize: "16px",fontWeight: "400",padding: "6px 24px"}} type="submit">تواصل معنا</button>
      </div>
    </nav>
  );
}