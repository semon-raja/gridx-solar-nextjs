import styles from "./page.module.css";

export default function ClosingCTA() {
    return (
        <section className={styles.closingSection}>

            {/* ── CTA card wrapper (relative for glow orbs) ── */}
            <div className={styles.closingCard}>

                {/* ── Glow orb — top left ───────────────────── */}
                <div className={`${styles.closingOrb} ${styles.closingOrbLeft}`} />

                {/* ── Glow orb — bottom right ───────────────── */}
                <div className={`${styles.closingOrb} ${styles.closingOrbRight}`} />

                {/* ── Content ───────────────────────────────── */}
                <div className={styles.closingContent}>

                    <h2 className={styles.closingTitle}>
                        Together for Better Energy
                    </h2>

                    {/* Gold decorative underline */}
                    <div className={styles.closingDivider} />

                    <p className={styles.closingDescription}>
                        Our partnerships help us provide quality products, reliable performance and dependable solar
                        solutions.
                    </p>

                </div>

            </div>

        </section>
    );
}
