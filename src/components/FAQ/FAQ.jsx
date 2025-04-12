"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "ما هو CODEQ؟",
    answer:
      "هو فريق تقني يهدف إلى دمج الإبداع مع التكنولوجيا من خلال تقديم خدمات في البرمجة، التصميم والاستشارات التقنية.",
  },
  {
    question: "ما هو CODEQ؟",
    answer:
      "هو فريق تقني يهدف إلى دمج الإبداع مع التكنولوجيا من خلال تقديم خدمات في البرمجة، التصميم والاستشارات التقنية.",
  },
  {
    question: "ما هو CODEQ؟",
    answer:
      "هو فريق تقني يهدف إلى دمج الإبداع مع التكنولوجيا من خلال تقديم خدمات في البرمجة، التصميم والاستشارات التقنية.",
  },
  {
    question: "ما هو CODEQ؟",
    answer:
      "هو فريق تقني يهدف إلى دمج الإبداع مع التكنولوجيا من خلال تقديم خدمات في البرمجة، التصميم والاستشارات التقنية.",
  },
  {
    question: "ما هو CODEQ؟",
    answer:
      "هو فريق تقني يهدف إلى دمج الإبداع مع التكنولوجيا من خلال تقديم خدمات في البرمجة، التصميم والاستشارات التقنية.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      {/* العنوان */}
      <h1 className="text-center mb-5" style={{marginTop: '150px'}}>الأسئلة الشائعة</h1>

      <div className="row align-items-center gy-4 ">

      {/* القسم الأول: الصورة */}
          <div className={`col-lg-6  justify-content-center d-flex1 `}>
          <Image
            src="/images/aboutUs.png"
            alt="FAQ"
            width={546}
            height={546}
            className={`rounded img-fluid ${styles.hover_animate} `}
          />
        </div>

        {/* القسم الثاني: الأسئلة */}
        <div className="col-lg-6">
          <div className="accordion " id="faqAccordion">
            {faqData.map((item, index) => (
              <div className={`accordion-item bg-black border-0 mb-3 p-2 ${styles._div_a52ab2}`} key={index}>
                <h2 className={`accordion-header d-flex align-items-center ${styles._header_a52ab2}`} onClick={() => toggleFAQ(index)} >
                  <button
                    className={`accordion-button bg-black ${styles._button_a52ab2} ${styles.no_arrow}  ${openIndex === index ? "" : "collapsed"}`}
                    type="button"
                    style={{ boxShadow: "none" }}
                  >
                    {item.question}
                  </button>
                  <span className={styles.__span_a52ab2}  >{openIndex === index ? "-" : "+"}</span>
                </h2>
                <div className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}>
                  <div className="accordion-body text-white">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}