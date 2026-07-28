import styles from "./page.module.css";

const stats = [
    { value: "45Mw+", label: "Projects Installed" },
    { value: "700+", label: "Happy Customers" },
    { value: "200+", label: "Partners Network" },
    { value: "8+", label: "States Active" },
];

export default function Stats() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.statsStrip}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
