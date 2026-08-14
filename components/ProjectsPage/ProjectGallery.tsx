import Image from "next/image";
import styles from "./page.module.css";

export default function ProjectGallery() {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        {/* ── Header ───────────────────────────────────────── */}
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>Our Work in Detail</h2>
          <p className={styles.gallerySubtitle}>
            High-resolution snapshots of our engineering excellence on the ground.
          </p>
        </div>

        {/* ── Mosaic Grid ──────────────────────────────────── */}
        <div className={styles.galleryGrid}>
          {/* Col 1–2 / Row 1–2: Large left image */}
          <div className={styles.galleryItemLarge}>
            <Image
              src="/images/Projectspage/IMG1.jpg"
              alt="Solar carport with EV charging stations"
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Col 3 / Row 1: Close-up solar panel */}
          <div className={styles.galleryItemSmall}>
            <Image
              src="/images/Projectspage/IMG2.jpg"
              alt="Close-up of solar panel with light"
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Col 4 / Row 1: Aerial village */}
          <div className={styles.galleryItemSmall}>
            <Image
              src="/images/Projectspage/IMG3.jpg"
              alt="Aerial view of village with solar installation at sunset"
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Col 3–4 / Row 2: Wide night aerial */}
          <div className={styles.galleryItemWide}>
            <Image
              src="/images/Projectspage/IMG4.png"
              alt="Aerial night view of large solar farm"
              fill
              className={styles.galleryImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
