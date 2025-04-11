import Image from "next/image";
import Services from "../components/Services/Services";
import styles from "./page.module.css";
import Link from "next/link";
import HeroBg from "../components/HeroBg";
import AboutUs from "../components/AboutUs/AboutUs";
import Joinus from "../components/JoinUs/Joinus";
import Projects from "../components/Projects/Projects";
import Gallery from "../components/Gallery/Gallery";
import Blogs from "../components/Blogs/Blogs";
import Testimonial from "../components/Testimonial/Testimonial";
import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import "../components/scrollbar.css";

export default function Home() {
  return (
    <>
      <HeroBg />
      <Hero />
      <Services />
      <AboutUs />
      <FAQ />
      <Blogs />
      <Projects />
      <Joinus />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
}
