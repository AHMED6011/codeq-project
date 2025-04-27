import styles from "./joinus.module.css";

export default function JoinUs() {
  return (
    <div style={{ overflow: "hidden" }} className={styles.container}>
      <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles.heroSection}>
        <p className={styles.heading}>شاركنا أفكارك وكن جزءًا من فريقنا</p>
        <p className={styles.text}>
          إذا كنت تمتلك فكرة مشروع و تريد أن تعمل عليها مع فريق متخصص ، فلا
          تتردد في التواصل معنا
        </p>
        <button className={styles.button}>شارك مشروعك معنا هنا!</button>
      </div>
    </div>
  );
}
