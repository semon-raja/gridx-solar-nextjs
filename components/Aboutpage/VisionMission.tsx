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
                            To be the most trusted name in renewable energy, <br />
                            revolutionizing India&apos;s landscape with high-efficiency <br />
                            solar infrastructures that define future standards of<br />
                            energy independence.
                        </p>
                    </div>

                    {/* ── Our Mission Card ── */}
                    <div className={styles.vmCard}>
                        <div className={styles.vmIconWrapper}>
                            <Image
                                src="/images/About/flag.png"
                                alt="Mission icon"
                                width={22.5}
                                height={25.5}
                                className={styles.vmIcon}
                            />
                        </div>
                        <h3 className={styles.vmCardTitle}>Our Mission</h3>
                        <p className={styles.vmCardText}>
                            To deliver superior solar assets through rigorous<br />
                            engineering, transparent procurement, and rapid<br />
                            construction, ensuring every stakeholder transitions<br />
                            seamlessly to clean energy.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
