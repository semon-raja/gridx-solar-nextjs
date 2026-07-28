import styles from "./page.module.css";
import Image from "next/image";

export default function StarcEnergy() {
    return (
        <section className={styles.starcSection}>   
            <div className={styles.container}>

                <div className={styles.starcCard}>
                        <Image
                            src="/images/Homepage/Icon.png"
                            alt="Thunder"
                            width={80}
                            height={114}
                            className={styles.thunderIcon}
                        />

                    <div className={styles.starcLeft}>

                        <p className={styles.starcLabel}>
                            EXCLUSIVE PARTNERSHIP
                        </p>

                        <h2 className={styles.starcTitle}>
                            Powered by Starc 
                            <br />
                            Energy
                        </h2>

                        <p className={styles.starcDescription}>
                            We aim to become the most technically sound, reliable, and
                            most bankable solar EPC in India with continuous improvement
                            in engineering and excellent management.
                        </p>

                        <button className={styles.starcButton} suppressHydrationWarning>
                            <span>View Product Lineup</span> 
                             <Image
                                src="/images/Homepage/Icon_button.png"
                                alt="icon"
                                width={18}
                                height={18}
                            />
                            
                        </button>

                    </div>

                   <div className={styles.starcRight}>

                        <div className={styles.infoCard}>
                            <p className={styles.infoText}>
                                Most Bankable Company – BBB+ Grade <br/>Equivalent
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <p className={styles.infoText}>
                                Successfully Completed India's 1st PV <br/> port solar project in BHU in collaboration <br/> with GIZ
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <p className={styles.infoText}>
                                Revenue Crossing 350 million INR
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}