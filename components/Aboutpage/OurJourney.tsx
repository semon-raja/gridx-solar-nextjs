import Image from "next/image";
import styles from "./page.module.css";

export default function OurJourney() {
    return (
        <section className={styles.ourJourney}>
            <div className={styles.container}>
                <div className={styles.ourJourneyInner}>

                    {/* ── Left: Text Content ── */}
                    <div className={styles.ourJourneyContent}>
                        <p className={styles.ourJourneyLabel}>ENGINEERED FOR IMPACT</p>

                        <h2 className={styles.ourJourneyTitle}>Our Journey</h2>

                        <p className={styles.ourJourneyText}>
                            Founded as Starc Energy in 2016, our evolution into Gridx Solar
                            represents a significant leap in our technical capabilities and
                            market reach. Today, we stand as a premier solar EPC partner,
                            driven by precision and a commitment to quality.
                        </p>

                        <p className={styles.ourJourneyText}>
                            With over 35MW+ completed projects across 6 states, our
                            dedicated team of 75+ professionals works tirelessly to optimize
                            solar assets for maximum yield and longevity.
                        </p>
                    </div>

                    {/* ── Right: Image ── */}
                    <div className={styles.ourJourneyImageWrapper}>
                        <Image
                            src="/images/About/our_Jor.jpg"
                            alt="Gridx Solar team at a solar installation site"
                            fill
                            className={styles.ourJourneyImage}
                            sizes="(max-width: 768px) 100vw, 560px"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
