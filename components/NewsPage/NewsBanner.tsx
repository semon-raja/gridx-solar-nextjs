import Image from "next/image";
import styles from "./page.module.css";

export default function NewsBanner() {
    return (
        <section className={styles.newsHero}>

            {/* ── Background image ── */}
            <Image
                src="/images/NewsPage/banner.jpg"
                alt="News & Updates hero background"
                fill
                priority
                className={styles.newsHeroImage}
            />

            {/* ── Blue/dark overlay (#00142833) ── */}
            <div className={styles.newsHeroBlueOverlay} />

            {/* ── Bottom-to-top dark gradient ── */}
            <div className={styles.newsHeroGradient} />

            {/* ── Hero content ── */}
            <div className={styles.newsHeroContent}>
                <h1 className={styles.newsHeroTitle}>
                    <span className={styles.newsHeroTitleGold}>News</span>
                    {" "}& Updates
                </h1>
                <p className={styles.newsHeroDescription}>
                    Stay updated with the latest news, project milestones, company announcements,
                    product launches and events from GridX Solar.
                </p>
            </div>

        </section>
    );
}
