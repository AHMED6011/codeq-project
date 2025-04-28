"use client";
import Image from "next/image";
import styles from "./about.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container my-5" >
      <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"  className="text-center" style={{ color: "#BE4423" , marginTop: "150px"}}>
        انضم إلينا وكن جزءًا من فريقنا !
      </h1>
      <hr  className="border-0 d-none d-md-block my-4" style={gradientLine} />

      <p    data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="300"
            className="text-center mx-auto px-3" style={{ maxWidth: "922px" }}>
        نسعى دائمًا لتوسيع فريقنا وضم أشخاص مبدعين وطموحين يشاركونا رؤيتنا في
        تطوير مشاريع متميزة. سواء كنت ترغب في التطوع أو البحث عن فرصة عمل، فهناك
        دائمًا مكان لك معنا!
      </p>

      <div className="row align-items-center mt-5 gy-4">
        {/* Image Section */}
        <div   data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300" className="col-12 col-md-6 text-center">
          <Image
            src="/images/aboutUs.png"
            alt="about-us"
            width={546}
            height={546}
            className={` img-fluid ${styles.hover_animate} `}
          />
        </div>

        {/* Text Content Section */}
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          {/* Block 1 */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row text-center text-md-end">
            <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="300"
             className={styles.blog_stroke}>01</div>
            <div className="overflow-hidden">
              <p  data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="350"  className="fw-bold fs-5">فرص التطوع</p>
              <p className="text-secondary">
                إذا كنت ترغب في تقديم يد العون والمساهمة في مشاريعنا المختلفة،
                يمكنك الانضمام إلينا كمتطوع. نحن نرحب بالأشخاص المتحمسين الذين
                لديهم الرغبة في إحداث تأثير إيجابي.
              </p>
            </div>
          </div>

          <hr className="border-0 d-none d-md-block" style={gradientLine} />

          {/* Block 2 */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row text-center text-md-end">
            <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="400"
              className={`${styles.blog_stroke} ${styles.second_blog_stroke}`}
            >
              02
            </div>
            <div className="overflow-hidden">
              <p data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="450" className="fw-bold fs-5" style={{ color: "#EF552C" }}>
                الفرص الوظيفية المتاحة
              </p>
              <p className="text-secondary">
                نبحث عن مطورين، مصممين، ومبدعين لديهم الشغف للعمل معنا. إذا كنت
                تمتلك المهارات المناسبة وترغب في أن تكون جزءًا من فريقنا، فهذه
                فرصتك!
              </p>
            </div>
          </div>

          <hr className="border-0 d-none d-md-block" style={gradientLine} />

          {/* Block 3 */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row text-center text-md-end">
            <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500" className={styles.blog_stroke}>03</div>
            <div className="overflow-hidden">
              <p data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="550" className="fw-bold fs-5">المهارات المطلوبة</p>
              <p className="text-secondary">
                نبحث عن أشخاص لديهم مهارات في التصميم الجرافيكي وتجربة المستخدم،
                البرمجة وتطوير المواقع، التسويق الرقمي وصناعة المحتوى، بالإضافة
                إلى إدارة المشاريع والعمل الجماعي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gradientLine = {
  height: "2px",
  background:
    "linear-gradient(270deg, rgba(0,0,0,0) -1.82%, #EF552C 59.71%, rgba(0,0,0,0) 111.4%)",
};

export default AboutUs;
