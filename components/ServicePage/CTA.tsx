import styles from "./page.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaSubtitlePill}>
            Ready to Transition?
          </div>
          <h2 className={styles.ctaTitle}>
            Start Your Solar Journey
          </h2>
          <p className={styles.ctaDescription}>
            Connect with our solar consultants today to receive a customized energy report<br />
            for your facility.
          </p>
          <button className={styles.ctaButton}>
            Consult Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
