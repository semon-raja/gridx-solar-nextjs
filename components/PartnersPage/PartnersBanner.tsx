import styles from "./page.module.css";

export default function PartnersBanner() {
    return (
        <section className={styles.banner}>
            {/* Background image overlay: left-to-right dark gradient */}
            <div className={styles.bannerOverlayH}></div>
            {/* Bottom fade overlay */}
            <div className={styles.bannerOverlayV}></div>

            <div className={styles.container}>
                <div className={styles.bannerContent}>

                    {/* Eyebrow label — GLOBAL ECOSYSTEM */}
                    <p className={styles.bannerEyebrow}>
                        GLOBAL ECOSYSTEM
                    </p>

                    {/* Main heading */}
                    <h1 className={styles.bannerTitle}>
                        Trusted Technology<br />
                        <span className={styles.bannerTitleGold}>Partners</span>
                    </h1>

                    {/* Description */}
                    <p className={styles.bannerDescription}>
                        We work with leading brands to deliver reliable solar modules, inverters and energy storage
                        solutions.
                    </p>

                    {/* Sub-label — Trusted by Tier 1 Manufacturers */}
                    <p className={styles.bannerSubtitle}>
                        Trusted by Tier 1 Manufacturers
                    </p>

                </div>
            </div>
        </section>
    );
}
