import styles from "./page.module.css";

export default function ProjectsBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerOverlay}></div>

            <div className={styles.container}>
                <div className={styles.bannerContent}>

                    <p className={styles.bannerSubtitle}>
                        TRUSTED BY INDUSTRY LEADERS
                    </p>

                    <h1 className={styles.bannerTitle}>
                        Pioneering Solar Excellence <br />
                        <span>Across India</span>
                    </h1>

                    <p className={styles.bannerDescription}>
                        Over 35Mw+ of successfully completed projects spanning residential,
                        commercial, industrial, and institutional sectors in 9+ states. Engineering
                        the future of sustainable energy.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statCard}>
                            <div className={styles.statCardInner}>
                                <span className={styles.statValue}>35+</span>
                                <div className={styles.statLabel}>
                                    <span className={styles.statLabelTop}>MW INSTALLED</span>
                                    <span className={styles.statLabelBottom}>CAPACITY</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statCardInner}>
                                <span className={styles.statValue}>9+</span>
                                <div className={styles.statLabel}>
                                    <span className={styles.statLabelTop}>STATES</span>
                                    <span className={styles.statLabelBottom}>PRESENCE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
