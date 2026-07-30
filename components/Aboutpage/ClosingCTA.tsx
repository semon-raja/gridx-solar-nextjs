import Link from "next/link";
import styles from "./page.module.css";

export default function ClosingCTA() {
    return (
        <section className={styles.closingCTA} aria-label="Contact CTA">
            {/* Dark overlay on top of background image */}
            <div className={styles.closingCTAOverlay} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.closingCTAInner}>
                    <h2 className={styles.closingCTATitle}>
                        Partner with us for your{" "}
                        <span className={styles.closingCTAHighlight}>solar journey</span>
                    </h2>

                    <p className={styles.closingCTASubtitle} data-nosnippet>
                        Ready to transition to clean energy? Join hundreds of businesses and
                        residential <br /> owners who trust Gridx&nbsp;Solar for high-performance
                        renewable solutions.
                    </p>

                    <Link href="/Contact" className={styles.closingCTAButton}>
                        Contact Our Experts Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
