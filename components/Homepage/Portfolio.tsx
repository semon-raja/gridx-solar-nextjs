import styles from "./page.module.css"
import Image from "next/image";

const projects = [
  {
    image: "/images/Homepage/10002.jpeg",
    capacity: "50Kw/72Kwh",
    title: "ESS Project Solar Hybrid",
    location: "UDALGURI, ASSAM",
  },
  {
    image: "/images/Homepage/10007.jpeg",
    capacity: "20Kw/36Kwh",
    title: "ESS Project Solar Hybrid",
    location: "BONGAIGAON, ASSAM",
  },
  {
    image: "/images/Homepage/10008.jpeg",
    capacity: "50Kw/60Kwh",
    title: "ESS Project Solar Hybrid",
    location: "GUWAHATI, ASSAM",
  },
];

export default function portfolio(){
    return(
        <section className={styles.portfolioSection}>
            <div className={styles.container}>

                <div className={styles.portfolioHeader}>

                    <div className={styles.portfolioContent}>

                        <p className={styles.portfolioLabel}>
                            PORTFOLIO
                        </p>

                        <h2 className={styles.portfolioTitle}>
                            Impact Across India
                        </h2>

                    </div>

                    <div className={styles.portfolioTabs}>

                        <button className={styles.activeTab} suppressHydrationWarning>
                            All
                        </button>

                        <button className={styles.tab} suppressHydrationWarning>
                            Delhi
                        </button>

                        <button className={styles.tab} suppressHydrationWarning>
                            Assam
                        </button>

                        <button className={styles.tab} suppressHydrationWarning>
                            Chandigarh
                        </button>

                    </div>

                </div>

                <div className={styles.projectGrid}>
                    {projects.map((project, index) => 
                        <div key={index} className={styles.projectCard}>

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={330}
                                height={400}
                                className={styles.projectImage}
                            />

                            <div className={styles.projectContent}>

                                <div className={styles.projectHeader}>

                                    <div>

                                        <p className={styles.projectCapacity}>
                                            {project.capacity}
                                            <br />
                                            {project.title}
                                        </p>

                                        <p className={styles.projectLocation}>
                                            {project.location}
                                        </p>

                                    </div>

                                    <button className={styles.projectArrow} suppressHydrationWarning>
                                        ↗
                                    </button>

                                </div>

                            </div>

                        </div>

                    )} 

                </div>
                    
            

            </div>
        </section>
    );
}
