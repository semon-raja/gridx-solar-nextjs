import styles from "./page.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerOverlay}></div>

            <div className={styles.container}>
                <div className={styles.bannerContent}>

                    <h1 className={styles.bannerTitle}>
                        Powering India's Clean
                        <br />
                        Energy Future <span>Since 2016</span>
                    </h1>

                    <p className={styles.bannerDescription}>
                        Gridx Solar is a leading EPC provider committed to engineering
                        excellence,<br /> delivering sustainable solar solutions that power
                        industrial growth and community <br />resilience across the nation.
                    </p>

                </div>
            </div>
        </section>
    );
}