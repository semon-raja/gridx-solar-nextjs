import Image from "next/image";
import styles from "./page.module.css";

const states = [
    { name: "Kerala",      col: 0 },
    { name: "Tamil Nadu",  col: 1 },
    { name: "Karnataka",   col: 0 },
    { name: "Maharashtra", col: 1 },
    { name: "Gujarat",     col: 0 },
    { name: "Telangana",   col: 1 },
];

const leftStates  = states.filter((s) => s.col === 0);
const rightStates = states.filter((s) => s.col === 1);

export default function OurPresence() {
    return (
        <section className={styles.presenceSection}>
            <div className={styles.container}>
                <div className={styles.presenceGrid}>

                    {/* ── Left: Map card ── */}
                    <div className={styles.presenceMapCard}>
                        <Image
                            src="/images/About/map.png"
                            alt="India presence map"
                            fill
                            className={styles.presenceMapImage}
                            sizes="(max-width: 900px) 100vw, 50vw"
                        />
                        {/* gradient overlay */}
                        <div className={styles.presenceMapGradient} aria-hidden="true" />
                    </div>

                    {/* ── Right: Content ── */}
                    <div className={styles.presenceContent}>

                        <p className={styles.presenceLabel}>NATIONAL REACH</p>

                        <h2 className={styles.presenceTitle}>
                            Serving Across 6+<br />States
                        </h2>

                        <p className={styles.presenceDescription}>
                            With core operational bases in Kerala, Tamil Nadu, and
                            Karnataka, our reach extends to 6 states, supported by a
                            network of 150+ dedicated channel partners who ensure local
                            expertise with national standards.
                        </p>

                        {/* States list – 2 columns */}
                        <div className={styles.presenceStatesGrid}>

                            {/* Column 1 */}
                            <div className={styles.presenceStatesCol}>
                                {leftStates.map((s) => (
                                    <div key={s.name} className={styles.presenceStateItem}>
                                        <Image
                                            src="/images/About/location.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                            className={styles.presenceLocationIcon}
                                            aria-hidden="true"
                                        />
                                        <span className={styles.presenceStateName}>{s.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className={styles.presenceStatesCol}>
                                {rightStates.map((s) => (
                                    <div key={s.name} className={styles.presenceStateItem}>
                                        <Image
                                            src="/images/About/location.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                            className={styles.presenceLocationIcon}
                                            aria-hidden="true"
                                        />
                                        <span className={styles.presenceStateName}>{s.name}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
