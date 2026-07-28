import Image from "next/image"; 
import styles from "./page.module.css";
export default function Solutions(){
    return(
        <section className={styles.solutions}>
            <div className={styles.container}>
                <div className={styles.solutionsContent}>
                    <div className={styles.headingRow}>

                        <div className={styles.headingLeft}>
                            <p className={styles.solutionsBadge}>SOLUTIONS</p>
                            <h2 className={styles.solutionsTitle}>
                                Comprehensive Solar Ecosystem
                            </h2>
                        </div>

                        <div className={styles.headingRight}>
                            <p>View All Solutions →</p>
                        </div>

                    </div>
                    <div className={styles.solutionsGrid}>
                        <div className={styles.topRow}> 
                            <div className={styles.solarCard}>
                                <div className={styles.solarImageOverlay}></div>
                                <div className={styles.solarCardContent}>
                                    <p className={styles.solarCardDescription}>
                                        Custom utility-scale solar EPC projects for commercial and <br />industrial applications.
                                    </p>
                                </div>
                                <div className={styles.solarCardOverlay}>
                                    <div className={styles.scaleUp}>
                                        <span>Scale Up</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.residentialCard}>
                                <div className={styles.residentialOverlay}></div>
                                <div className={styles.residentialCardContent}>
                                    <h2 className={styles.residentialCardTitle}>
                                        Residential Solar
                                    </h2>

                                    <p className={styles.residentialCardDescription}>
                                        Solar power systems for residential <br/> applications
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottomRow}>
                            <div className={styles.hybridCard}>
                                <div className={styles.hybridOverlay}></div>
                                <div className={styles.hybridCardContent}>
                                    <h2 className={styles.residentialCardTitle}>
                                        Hybrid & ESS
                                    </h2>
                                    <p className={styles.residentialCardDescription}>
                                    Solar Hybrid and Energy <br/> Storage Systems (ESS).
                                    </p>
                                </div>
                            </div>
                            <div className={styles.appCard}>
                                <div className={styles.phoneWrapper}>
                                    <Image src="/images/Homepage/mobile.png" alt="GridX Mobile App" width={259} height={547} />
                                </div>

                                <div className={styles.appCardContent}>
                                    <div className={styles.appBadgeWrapper}>
                                        <span className={styles.appBadge}>PROPRIETARY TECH</span>
                                    </div>
                                    <h2 className={styles.appCardTitle}>
                                        GRIDX Mobile App
                                    </h2>
                                    <p className={styles.appCardDescription}>
                                        One touch after sale service. Complaint booking, services, AMC for your solar system all in one app.
                                    </p>
                                    <button className={styles.appCardButton} suppressHydrationWarning>
                                        Get the App
                                        <svg
                                            className={styles.appCardButtonIcon}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
                                            <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
                                            <line x1="9" y1="5" x2="15" y2="5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}