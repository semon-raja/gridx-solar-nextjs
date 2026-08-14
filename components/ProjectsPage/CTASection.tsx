import styles from "./page.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaOuter}>
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          {/* ── Glow orbs ───────────────────────────────── */}
          <div className={styles.ctaGlowTopLeft} aria-hidden="true" />
          <div className={styles.ctaGlowBottomRight} aria-hidden="true" />

          {/* ── Content ─────────────────────────────────── */}
          <div className={styles.ctaContent}>
            <div className={styles.ctaTextBlock}>
              <h2 className={styles.ctaTitle}>
                Ready to Transition to{" "}
                <span className={styles.ctaTitleGold}>Solar?</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Join 500+ satisfied clients across India who have optimized
                their energy costs with Gridx Solar engineering.
              </p>
            </div>

            {/* ── Buttons ─────────────────────────────── */}
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaBtnPrimary}>
                Request a Proposal
              </a>
              <a href="/contact" className={styles.ctaBtnSecondary}>
                Speak to an Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
