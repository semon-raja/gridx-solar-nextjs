import Image from 'next/image';
import styles from "./page.module.css";

export default function Hero(){
    return (
        <section className={styles.hero}>
            <div className={styles.heroOverlay}></div>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                                <p className={styles.heroBadge}>
                                    ESTABLISHED 2016
                                </p>
                
                    <h1 className={styles.heroTitle}>
                        Generate. Conserve. <br />
                        Contribute.
                    </h1>


                    <p className={styles.heroDescription}>
                        Solar Solutions for a Net-Zero Future.
                    </p>

                    <button className={styles.heroButton} suppressHydrationWarning>
                        Explore Projects
                        <Image
                            src="/images/Homepage/arrow.png"
                            alt="arrow"
                            width={16}
                            height={16}
                            className={styles.heroButtonArrow}
                        />
                    </button>

                </div>
            </div>

        </section>
    );
}