import styles from "./page.module.css";
import Image from "next/image";

const featuredProjects = [
  {
    icon: "/images/Homepage/solar.png",
    title: "100Kw/120Kwh ESS Project Solar Hybrid",
    location: "GUWAHATI, ASSAM",
  },
  {
    icon: "/images/Homepage/grid.png",
    title: "450Kw On Grid",
    location: "DELHI",
  },
  {
    icon: "/images/Homepage/sun.png",
    title: "300Kw Solar Ongrid",
    location: "NANDURBAR, MAHARASHTRA",
  },
];

export default function Projects(){
    return(
        <section className={styles.featuredProjects}>
            <div className={styles.container}>
                <p className={styles.sectionTag}>SHOWCASE</p>

                <h2 className={styles.sectionTitle}>
                Featured Projects
                </h2>

                <div className={styles.featuredProjectsGrid}>
                {featuredProjects.map((project, index) => (
                    <div key={index} className={styles.featuredCard}>
                    <Image
                        src={project.icon}
                        alt={project.title}
                        width={28}
                        height={28}
                    />

                    <h3>{project.title}</h3>

                    <p>{project.location}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}