import Image from 'next/image';
import styles from "./page.module.css";


export default function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutContainer}>

                <div className={styles.aboutImageWrapper}>
                    <div className={styles.aboutImageBorder}>
                        <Image
                            src="/images/Homepage/10001.jpeg"
                            alt="GridX Solar team reviewing solar project plans"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '24px' }}
                        />

                        <div className={styles.netZeroCard}>
                            <h3 className={styles.netZeroTitle}>Net Zero</h3>
                            <p className={styles.netZeroText}>
                                Committed to the Net Zero Carbon Emission Targets, we as an
                                organisation strive to make an impact by contributing to a clean
                                and green future.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className={styles.aboutContent}>
                    <p className={styles.aboutLabel}>Our Identity</p>
                    <h2 className={styles.aboutTitle}>Company Overview</h2>

                    <div className={styles.aboutBody}>
                        <p>
                            Incorporated in 2016 with a vision to become a leader in the power sector,
                            Starc Energy Solutions Pvt. Ltd. which later expanded into Gridx Solar Pvt.
                            Ltd. has successfully completed more than 35Mw of Solar Projects both In
                            India and abroad.
                        </p>
                        <p>
                            The company has its operational bases in 6 states in India from Kerala in the
                            Southern Region to Assam in the North Eastern Region. We have a work force of
                            over 75 highly motivated people with our successful projects reaching a total
                            capacity of 35Mw in the past 9 years.
                        </p>
                        <p>
                            We aim to become the most technically sound, reliable, and most bankable solar
                            EPC In India with continuous improvement in engineering and excellent management.
                        </p>
                    </div>

                  
                    <div className={styles.aboutBadges}>
                        <div className={styles.aboutBadge}>
                            <div className={styles.aboutBadgeIcon}>
                                <Image
                                    src="/images/Homepage/verified.png"
                                    alt="BBB+ Rated"
                                    width={18}
                                    height={18}
                                />
                            </div>
                            <span>BBB+ Rated</span>
                        </div>
                        <div className={styles.aboutBadge}>
                            <div className={styles.aboutBadgeIcon}>
                                <Image
                                    src="/images/Homepage/leaf.png"
                                    alt="GIZ PV Port Certified"
                                    width={18}
                                    height={18}
                                />
                            </div>
                            <span>GIZ PV Port Certified</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
