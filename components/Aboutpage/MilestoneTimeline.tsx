import Image from "next/image";
import styles from "./page.module.css";

const milestones = [
    {
        year: "2008",
        title: "SPG Mining",
        description: (
            <>
            The foundations of the group were laid in specialized mining <br /> operations, establishing a culture of heavy industrial <br /> excellence and logistical precision.
            </>
        )
    },
    {
        year: "2010",
        title: "JAAS Travels",
        description: (
            <>
            Diversification into transport and logistics, refining our <br /> service-oriented approach and fleet management capabilities <br /> on a regional scale.
            </>
        )
    },
    {
        year: "2016",
        title: "Starc Energy",
        description: (
            <>
            The entry into renewables. Starc Energy was born with a <br /> mission to simplify solar adoption for C&I clients across <br /> South India.
            </>
        )
    },
    {
        year: "2022",
        title: "Gridx Solar 25Mw",
        description: (
            <>              
            Rebranded to Gridx Solar to reflect our grid-focused <br /> technical depth. Surpassed 25Mw of cumulative installed <br /> capacity.
            </>
        )   
    },
    {
        year: "2024",
        title: "2.5MWh Hybrid/ESS",
        description: ( 
            <> 
            Pioneering energy storage solutions with our first major <br /> 2.5MWh Hybrid ESS project, ensuring round-the-clock <br /> reliability.
            </>
        )   
    },
];

export default function MilestoneTimeline() {
    return (
        <section className={styles.milestoneSection}>
            <div className={styles.container}>
                <div className={styles.milestoneHeader}>
                    <p className={styles.milestoneLabel}>THE EVOLUTION</p>
                    <h2 className={styles.milestoneTitle}>Building Our Legacy</h2>
                </div>

                <div className={styles.timeline}>
                    <Image
                        src="/images/About/Vertical Divider.png"
                        alt=""
                        width={2}
                        height={1334}
                        className={styles.timelineDivider}
                        aria-hidden="true"
                    />
                    {milestones.map((m, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={[
                                    styles.timelineRow,
                                    isLeft ? styles.timelineRowLeft : styles.timelineRowRight,
                                ].join(" ")}
                            >
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

                                <div className={styles.timelineSpine}>
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
                                </div>

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
