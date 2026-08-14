import Image from "next/image";
import styles from "./page.module.css";

export default function AppCallout() {
    return (
        <section className={styles.appCalloutWrapper}>
            <div className={styles.container}>
                <div className={styles.appCalloutCard}>

                    {/* ── Decorative bg icon (top-right corner) ── */}
                    <div className={styles.appCalloutBgIcon} aria-hidden="true">
                        <Image
                            src="/images/About/bg_icon.png"
                            alt=""
                            fill
                            className={styles.appCalloutBgIconImg}
                            sizes="250px"
                        />
                    </div>

                    {/* ── Left: Text content ── */}
                    <div className={styles.appCalloutContent}>

                        <h2 className={styles.appCalloutTitle}>
                            One-Touch<br />After-Sale Service
                        </h2>

                        <p className={styles.appCalloutDescription}>
                            Experience the future of solar management with the<br /> GRIDX App.
                            Monitor yields, request maintenance, and <br /> get instant technical
                            support directly from your pocket.
                        </p>

                        {/* ── Buttons ── */}
                        <div className={styles.appCalloutButtons}>

                            {/* Google Play */}
                            <a
                                href="#"
                                className={styles.appCalloutBtn}
                                aria-label="Get it on Google Play"
                            >
                                <Image
                                    src="/images/About/PlayStore.png"
                                    alt="Google Play"
                                    width={20}
                                    height={20}
                                    className={styles.appCalloutBtnIcon}
                                />
                                <div className={styles.appCalloutBtnText}>
                                    <span className={styles.appCalloutBtnSub}>GET IT ON</span>
                                    <span className={styles.appCalloutBtnName}>Google Play</span>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="#"
                                className={styles.appCalloutBtn}
                                aria-label="Download on the App Store"
                            >
                                <Image
                                    src="/images/About/AppStore.png"
                                    alt="App Store"
                                    width={20}
                                    height={20}
                                    className={styles.appCalloutBtnIcon}
                                />
                                <div className={styles.appCalloutBtnText}>
                                    <span className={styles.appCalloutBtnSub}>DOWNLOAD ON</span>
                                    <span className={styles.appCalloutBtnName}>App Store</span>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* ── Right: App image mockup ── */}
                    <div className={styles.appCalloutImageWrapper}>
                        <Image
                            src="/images/About/Callout_image.jpg"
                            alt="GRIDX App screenshot"
                            fill
                            className={styles.appCalloutImage}
                            sizes="300px"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
