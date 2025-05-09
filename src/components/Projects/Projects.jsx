import Image from "next/image";
import styles from './projects.module.css'; // أو استخدم ملف CSS عادي

export default function Projects() {
  return (
    <div className={`container ${styles.projectsContainer}`}>
      <div style={{ position: "absolute", right: "0" }}>
        <Image
          src="/images/blog_star_bg.png"
          alt="blog_star_bg"
          width={264}
          height={846}
        />
      </div>
      
      <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300" 
            className={styles.sectionTitle}>
        مشاريعنا الرقمية المبتكرة
      </h1>
      
      <hr className="border-0 d-none d-md-block my-4" />
            
      <p data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles.sectionDescription}>
        نحن في CODEQ نؤمن بأن الإبداع والتقنية يسيران جنبًا إلى جنب. في هذا
        القسم، نعرض مجموعة من المشاريع التي تعكس شغفنا بالتطوير والابتكار، بدءًا
        من البرمجيات الحديثة وصولًا إلى الحلول الرقمية المتقدمة.
      </p>
      
      <div className={styles.projectsGrid}>
        <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="300"
             className={`${styles.projectCard} ${styles.webDesign}`}>
          <h2>مشاريع تطوير المواقع</h2>
          <p>
            من الفكرة إلى الإطلاق، نقدم حلولًا متكاملة لتصميم وتطوير المواقع
            الإلكترونية، سواء كانت مواقع أعمال، متاجر إلكترونية، أو منصات
            تعليمية.
          </p>
          <button className={styles.viewButton}>
            عرض جميع المشاريع
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        
        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300"
             className={`${styles.projectCard} ${styles.visualIdentity}`}>
          <h2>مشاريع الهوية البصرية</h2>
          <p>
            نؤمن بأن الهوية البصرية هي جوهر أي علامة تجارية ناجحة. في هذا القسم،
            نقدم أعمالنا في تصميم الشعارات، اختيار الألوان، إنشاء دليل الهوية
            البصرية، والتصميمات الجرافيكية التي تبرز هوية العلامات التجارية
            بأسلوب فريد ومبتكر.
          </p>
          <button className={styles.viewButton}>
            عرض جميع المشاريع
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300" className={`${styles.projectCard} ${styles.softwareProjects}`}>
          <h2>مشاريع البرمجيات</h2>
          <p>
            نطور مواقع إلكترونية متميزة تلبي احتياجات المستخدمين، سواء كانت
            مواقع تجارية، منصات إلكترونية، أو حلول ويب مخصصة. نحرص على تقديم
            تجربة مستخدم سلسة مع تصميم عملي وحديث.
          </p>
          <button className={styles.viewButton}>
            عرض جميع المشاريع
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}