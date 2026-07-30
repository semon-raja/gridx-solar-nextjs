import Image from "next/image";
import styles from "./page.module.css";

export default function VisionMission() {
    return (
        <section className={styles.visionMission}>
            <div className={styles.container}>
                <div className={styles.visionMissionGrid}>

                    {/* ── Our Vision Card ── */}
                    <div className={styles.vmCard}>
                        <div className={styles.vmIconWrapper}>
                            <Image
                                src="/images/About/eye.png"
                                alt="Vision icon"
                                width={32}
                                height={32}
                                className={styles.vmIcon}
                            />
                        </div>
                        <h3 className={styles.vmCardTitle}>Our Vision</h3>
                        <p className={styles.vmCardText}>
                            To be the most trusted name in renewable energy,
                            revolutionizing India&apos;s landscape with high-efficiency
                            solar infrastructures that define future standards of
                            energy independence.
                        </p>
                    </div>

                    {/* ── Our Mission Card ── */}
                    <div className={styles.vmCard}>
                        <div className={styles.vmIconWrapper}>
                            <Image
                                src="/images/About/flag.png"
                                alt="Mission icon"
                                width={32}
                                height={32}
                                className={styles.vmIcon}
                            />
                        </div>
                        <h3 className={styles.vmCardTitle}>Our Mission</h3>
                        <p className={styles.vmCardText}>
                            To deliver superior solar assets through rigorous
                            engineering, transparent procurement, and rapid
                            construction, ensuring every stakeholder transitions
                            seamlessly to clean energy.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
