import styles from "./page.module.css";

const stats = [
    { value: "16",    label: "Years Management"   },
    { value: "35Mw+", label: "Projects Done"      },
    { value: "6+",    label: "Bases Across India" },
    { value: "500+",  label: "Happy Customers"    },
    { value: "150+",  label: "Channel Partners"   },
];

export default function StatsStrip() {
    return (
        <section className={styles.statsStrip}>
            <div className={styles.container}>
                <div className={styles.statsRow}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
