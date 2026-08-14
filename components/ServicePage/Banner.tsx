import styles from "./page.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerOverlay}></div>

            <div className={styles.container}>
                <div className={styles.bannerContent}>
                    
                    <p className={styles.bannerSubtitle}>
                        OUR EXPERTISE
                    </p>

                    <h1 className={styles.bannerTitle}>
                        Comprehensive <span>Solar</span>
                        <br />
                        <span>Solutions</span>
                    </h1>

                    <p className={styles.bannerDescription}>
                        From residential rooftops to industrial-scale EPC, we deliver engineering excellence across
                        India, powering a sustainable tomorrow through precision and innovation.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryButton} suppressHydrationWarning>
                            Explore Systems
                        </button>
                        <button className={styles.secondaryButton} suppressHydrationWarning>
                            Download Brochure
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
