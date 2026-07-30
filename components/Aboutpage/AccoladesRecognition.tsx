import Image from "next/image";
import styles from "./page.module.css";

const accolades = [
    {
        icon: "/images/About/bage.png",
        title: "India's 1st PV Port",
        description:
            "Successfully commissioned the nation's first major PV port solar project under innovative design criteria.",
    },
    {
        icon: "/images/About/bank.png",
        title: "BBB+ Bankability",
        description:
            "Rated BBB+ for financial stability and project bankability, ensuring secure investments for our partners.",
    },
    {
        icon: "/images/About/star.png",
        title: "Young Entrepreneur 2017",
        description:
            "Awarded for innovative leadership in the renewable sector during the early growth phase of Starc Energy.",
    },
    {
        icon: "/images/About/verified.png",
        title: "ISO 9001:2015 Certified",
        description:
            "Global standards maintained across all engineering, procurement, and construction workflows.",
    },
    {
        icon: "/images/About/tool.png",
        title: "Fastest Execution 2021",
        description:
            "Recognised for completing a 5Mw rooftop installation in record time without compromising safety.",
    },
    {
        icon: "/images/About/kerla.png",
        title: "Top EPC Kerala",
        description:
            "Continuously ranked among the top solar developers in the Kerala and Tamil Nadu regions.",
    },
];

export default function AccoladesRecognition() {
    return (
        <section className={styles.accoladesSection}>

            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.accoladesHeader}>
                    <h2 className={styles.accoladesTitle}>
                        Accolades &amp; Recognition
                    </h2>
                    <p className={styles.accoladesSubtitle}>
                        Excellence validated by industry benchmarks and sovereign trust.
                    </p>
                </div>

                {/* ── 3×2 card grid ── */}
                <div className={styles.accoladesGrid}>
                    {accolades.map((item, idx) => (
                        <div key={idx} className={styles.accoladeCard}>

                            {/* Icon */}
                            <div className={styles.accoladeIconWrapper}>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={24}
                                    height={24}
                                    className={styles.accoladeIcon}
                                />
                            </div>

                            {/* Text */}
                            <div className={styles.accoladeCardBody}>
                                <h3 className={styles.accoladeCardTitle}>{item.title}</h3>
                                <p className={styles.accoladeCardText}>{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
