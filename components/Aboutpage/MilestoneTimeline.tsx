import Image from "next/image";
import styles from "./page.module.css";

const milestones = [
    {
        year: "2008",
        title: "SPG Mining",
        description:
            "The foundations of the group were laid in specialized mining operations, establishing a culture of heavy industrial excellence and logistical precision.",
    },
    {
        year: "2010",
        title: "JAAS Travels",
        description:
            "Diversification into transport and logistics, refining our service-oriented approach and fleet management capabilities on a regional scale.",
    },
    {
        year: "2016",
        title: "Starc Energy",
        description:
            "The entry into renewables. Starc Energy was born with a mission to simplify solar adoption for C&I clients across South India.",
    },
    {
        year: "2022",
        title: "Gridx Solar 25Mw",
        description:
            "Rebranded to Gridx Solar to reflect our grid-focused technical depth. Surpassed 25Mw of cumulative installed capacity.",
    },
    {
        year: "2024",
        title: "2.5MWh Hybrid/ESS",
        description:
            "Pioneering energy storage solutions with our first major 2.5MWh Hybrid ESS project, ensuring round-the-clock reliability.",
    },
];

export default function MilestoneTimeline() {
    return (
        <section className={styles.milestoneSection}>
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.milestoneHeader}>
                    <p className={styles.milestoneLabel}>THE EVOLUTION</p>
                    <h2 className={styles.milestoneTitle}>Building Our Legacy</h2>
                </div>

                {/* ── Timeline ── */}
                <div className={styles.timeline}>
                    {milestones.map((m, idx) => {
                        const isLeft = idx % 2 === 0; /* even → year left, card right */
                        return (
                            <div
                                key={idx}
                                className={[
                                    styles.timelineRow,
                                    isLeft ? styles.timelineRowLeft : styles.timelineRowRight,
                                ].join(" ")}
                            >
                                {/* ── Left column ── */}
                                <div className={styles.timelineSideLeft}>
                                    {isLeft ? (
                                        <span className={styles.timelineYear}>{m.year}</span>
                                    ) : (
                                        <div className={styles.timelineCard}>
                                            <h3 className={styles.timelineCardTitle}>{m.title}</h3>
                                            <p className={styles.timelineCardText}>{m.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* ── Centre spine ── */}
                                <div className={styles.timelineSpine}>
                                    {/* top line segment */}
                                    <div className={styles.timelineLineTop} />

                                    {/* circle node */}
                                    <div className={styles.timelineNodeWrapper}>
                                        <Image
                                            src="/images/About/Background+Border.png"
                                            alt=""
                                            fill
                                            className={styles.timelineNode}
                                            sizes="44px"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* bottom line segment */}
                                    <div className={styles.timelineLineBottom} />
                                </div>

                                {/* ── Right column ── */}
                                <div className={styles.timelineSideRight}>
                                    {isLeft ? (
                                        <div className={styles.timelineCard}>
                                            <h3 className={styles.timelineCardTitle}>{m.title}</h3>
                                            <p className={styles.timelineCardText}>{m.description}</p>
                                        </div>
                                    ) : (
                                        <span className={styles.timelineYear}>{m.year}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
