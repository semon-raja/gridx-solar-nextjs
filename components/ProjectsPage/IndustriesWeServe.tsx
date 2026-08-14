import Image from "next/image";
import styles from "./page.module.css";

const industries = [
  {
    id: 1,
    title: "Textile",
    projects: "12+ PROJECTS",
    icon: "/images/Projectspage/textile.png",
  },
  {
    id: 2,
    title: "Agro",
    projects: "8+ PROJECTS",
    icon: "/images/Projectspage/argo.png",
  },
  {
    id: 3,
    title: "Steel",
    projects: "5+ PROJECTS",
    icon: "/images/Projectspage/steel.png",
  },
  {
    id: 4,
    title: "Hospitals",
    projects: "15+ PROJECTS",
    icon: "/images/Projectspage/hospital.png",
  },
  {
    id: 5,
    title: "Schools",
    projects: "22+ PROJECTS",
    icon: "/images/Projectspage/school.png",
  },
  {
    id: 6,
    title: "Supermarkets",
    projects: "16+ PROJECTS",
    icon: "/images/Projectspage/supermarket.png",
  },
  {
    id: 7,
    title: "Cold Storage",
    projects: "6+ PROJECTS",
    icon: "/images/Projectspage/cold_storage.png",
  },
  {
    id: 8,
    title: "Commercial",
    projects: "30+ PROJECTS",
    icon: "/images/Projectspage/commercial.png",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.industriesGlow}></div>
      <div className={styles.container}>
        <div className={styles.industriesHeader}>
          <h2 className={styles.industriesTitle}>Industries We Serve</h2>
          <p className={styles.industriesDescription}>
            Providing customized engineering solutions across a diverse spectrum of power-intensive<br />
            industries.
          </p>
        </div>

        <div className={styles.industriesGridWrapper}>
          <div className={styles.industriesGrid}>
            {industries.map((ind) => (
              <div key={ind.id} className={styles.industryCard}>
                <div className={styles.industryIconWrapper}>
                  <Image
                    src={ind.icon}
                    alt={ind.title}
                    width={28}
                    height={28}
                    className={styles.industryIcon}
                  />
                </div>
                <div className={styles.industryTextContent}>
                  <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                  <p className={styles.industryCardSubtitle}>{ind.projects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
