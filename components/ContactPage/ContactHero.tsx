import Image from "next/image";
import styles from "./page.module.css";

export default function ContactHero() {
    return (
        <section className={styles.contactHero}>

            {/* Background image */}
            <Image
                src="/images/ContactPage/banner.jpg"
                alt="Solar energy storage equipment"
                fill
                priority
                className={styles.heroImage}
            />

            {/* Left-to-right gradient */}
            <div className={styles.heroGradientH} />

            {/* Bottom-to-top gradient */}
            <div className={styles.heroGradientV} />

            {/* Content */}
            <div className={styles.heroContent}>
                <p className={styles.heroEyebrow}>Connect with Engineering</p>

                <h1 className={styles.heroHeading}>
                    Contact <span>Us</span>
                </h1>

                <p className={styles.heroDescription}>
                    Get in Touch: Have a question or need a solar solution? Our team is
                    here to help. Reach out to discuss how our EPC standards can elevate
                    your renewable energy infrastructure.
                </p>
            </div>

        </section>
    );
}
