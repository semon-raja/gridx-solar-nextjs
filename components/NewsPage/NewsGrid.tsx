"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

/* ── Article data — Page 1 ─────────────────────────────────── */
const pages = [
    {
        featured: {
            image: "/images/NewsPage/grid_solar.jpg",
            category: "COMPANY ANNOUNCEMENTS",
            categoryStyle: "gold" as const,
            date: "OCT 24, 2024",
            title: ["Gridx Solar Secures", "500MW EPC", "Contract in Nevada"],
            description: [
                "This milestone project marks a significant expansion into the",
                "Southwest utility-scale market, demonstrating our capacity for…"
            ],
            link: "#",
        },
        standard1: {
            image: "/images/NewsPage/next_gen.jpg",
            category: "PRODUCT LAUNCHES",
            categoryStyle: "blue" as const,
            date: "OCT 15, 2024",
            title: ["Next-Gen Inverters", "Promise 15%…"],
            description: ["Our new proprietary", "inverter architecture utilizes advanced", "silicon carbide components to…"],
        },
        text: {
            category: "PROJECT UPDATES",
            title: ["Phase 2", "Commissioning", "Complete for", "Horizon Alpha"],
            description: [
                "The 120MW facility is now",
                "fully operational and",
                "feeding the grid,",
                "completing two weeks",
                "ahead of the projected EPC",
                "schedule."
            ],
            link: "#",
        },
        standard2: {
            image: "/images/NewsPage/epc.jpg",
            category: "AWARDS & ACHIEVEMENTS",
            categoryStyle: "green" as const,
            date: "OCT 02, 2024",
            title: ["Gridx Named 'EPC", "Contractor of the…"],
            description: ["Recognized by the Renewable", "Energy Council for outstanding", "safety records and timeline…"],
        },
        standard3: {
            image: "/images/NewsPage/join_us.jpg",
            category: "INDUSTRY EVENTS",
            categoryStyle: "gray" as const,
            date: "SEP 28, 2024",
            title: ["Join Us at Intersolar", "North America 2024"],
            description: ["Our lead engineers will be", "presenting on advanced grid", "integration techniques for large-…"],
        },
    },
    // Page 2 — same data shifted for demo
    {
        featured: {
            image: "/images/NewsPage/epc.jpg",
            category: "AWARDS & ACHIEVEMENTS",
            categoryStyle: "green" as const,
            date: "OCT 02, 2024",
            title: ["Gridx Named 'EPC", "Contractor of the Year'"],
            description: "Recognized by the Renewable Energy Council for outstanding safety records and project timeline performance in 2024…",
            link: "#",
        },
        standard1: {
            image: "/images/NewsPage/grid_solar.jpg",
            category: "COMPANY ANNOUNCEMENTS",
            categoryStyle: "gold" as const,
            date: "OCT 24, 2024",
            title: ["Gridx Solar Secures", "500MW EPC Contract"],
            description: ["Expanding into the Southwest", "utility-scale market with", "landmark EPC milestone…"],
        },
        text: {
            category: "PROJECT UPDATES",
            title: "Rajasthan Phase 1 Grid Connection Milestone Achieved",
            description: "The 80MW facility has completed its grid synchronisation test and is now exporting to the national grid ahead of Q1 targets.",
            link: "#",
        },
        standard2: {
            image: "/images/NewsPage/next_gen.jpg",
            category: "PRODUCT LAUNCHES",
            categoryStyle: "blue" as const,
            date: "SEP 18, 2024",
            title: ["New Bifacial Module", "Series Launched"],
            description: ["Dual-glass bifacial panels with", "22.4% efficiency rating now", "available for utility projects…"],
        },
        standard3: {
            image: "/images/NewsPage/join_us.jpg",
            category: "INDUSTRY EVENTS",
            categoryStyle: "gray" as const,
            date: "AUG 30, 2024",
            title: ["GridX at REI Expo", "New Delhi 2024"],
            description: ["Meet our EPC specialists at", "Hall 7, Booth 24 for live", "grid simulations…"],
        },
    },
    // Page 3
    {
        featured: {
            image: "/images/NewsPage/join_us.jpg",
            category: "INDUSTRY EVENTS",
            categoryStyle: "gray" as const,
            date: "SEP 28, 2024",
            title: ["Join Us at Intersolar", "North America 2024"],
            description: "Our lead engineers will be presenting on advanced grid integration techniques for large-scale utility deployments…",
            link: "#",
        },
        standard1: {
            image: "/images/NewsPage/next_gen.jpg",
            category: "PRODUCT LAUNCHES",
            categoryStyle: "blue" as const,
            date: "AUG 15, 2024",
            title: ["Smart SCADA 3.0", "Now Available"],
            description: ["Real-time monitoring with", "AI-driven fault prediction", "across all plant assets…"],
        },
        text: {
            category: "PROJECT UPDATES",
            title: "Chhattisgarh 150MW Plant Breaks Ground Ahead of Schedule",
            description: "Civil works commenced 3 weeks early following regulatory fast-track approval, targeting commissioning by Q3 2025.",
            link: "#",
        },
        standard2: {
            image: "/images/NewsPage/epc.jpg",
            category: "AWARDS & ACHIEVEMENTS",
            categoryStyle: "green" as const,
            date: "JUL 20, 2024",
            title: ["ISO 45001 Safety", "Certification Renewed"],
            description: ["Occupational health & safety", "management system audited", "and recertified for 2024-27…"],
        },
        standard3: {
            image: "/images/NewsPage/grid_solar.jpg",
            category: "COMPANY ANNOUNCEMENTS",
            categoryStyle: "gold" as const,
            date: "JUL 08, 2024",
            title: ["GridX Appoints New", "CTO for Expansion"],
            description: ["Dr. Arjun Mehta joins GridX", "to lead R&D and technology", "roadmap for FY2025…"],
        },
    },
];

/* ── Badge style map ───────────────────────────────────────── */
type BadgeStyle = "gold" | "blue" | "green" | "gray";
const badgeClass: Record<BadgeStyle, string> = {
    gold: styles.badgeGold,
    blue: styles.badgeBlue,
    green: styles.badgeGreen,
    gray: styles.badgeGray,
};

/* ── NewsGrid Component ────────────────────────────────────── */
export default function NewsGrid() {
    const [currentPage, setCurrentPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const totalPages = pages.length;

    const goToPage = (idx: number) => {
        if (idx === currentPage || animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrentPage(idx);
            setAnimating(false);
        }, 300);
    };

    const { featured, standard1, text, standard2, standard3 } = pages[currentPage];

    return (
        <section className={styles.newsGridSection}>
            <div className={styles.newsGridContainer}>

                {/* ── Bento Grid ── */}
                <div className={`${styles.newsGrid} ${animating ? styles.newsGridFade : ""}`}>

                    {/* Card 1: Featured — spans col 1–2, row 1 */}
                    <article className={styles.featuredCard}>
                        <Image
                            src={featured.image}
                            alt={featured.title.join(" ")}
                            fill
                            className={styles.featuredCardBg}
                        />
                        <div className={styles.featuredCardContent}>
                            {/* Top meta */}
                            <div className={styles.cardMetaRow}>
                                <span className={badgeClass[featured.categoryStyle]}>{featured.category}</span>
                                <span className={styles.cardDate}>{featured.date}</span>
                            </div>
                            {/* Bottom */}
                            <div className={styles.featuredCardBottom}>
                                <h2 className={styles.featuredCardTitle}>
                                    {featured.title.map((line, i) => (
                                        <span key={i}>{line}{i < featured.title.length - 1 && <br />}</span>
                                    ))}
                                </h2>
                                <p className={styles.featuredCardDesc}>
                                    {Array.isArray(featured.description) ? (
                                        featured.description.map((line, i, arr) => (
                                            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                        ))
                                    ) : (
                                        featured.description
                                    )}
                                </p>
                                <a href={featured.link} className={styles.cardLink}>
                                    Read Full Story
                                    <Image
                                        src="/images/NewsPage/arrow.png"
                                        alt="→"
                                        width={9}
                                        height={9}
                                        className={styles.cardLinkArrow}
                                    />
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Card 2: Standard — col 3, row 1 */}
                    <article className={styles.standardCard}>
                        <div className={styles.standardCardImageWrap}>
                            <Image src={standard1.image} alt={standard1.title.join(" ")} fill className={styles.standardCardImage} />
                            <div className={styles.standardCardImageGrad} />
                        </div>
                        <div className={styles.standardCardContent}>
                            <div className={styles.cardMetaRow}>
                                <span className={badgeClass[standard1.categoryStyle]}>{standard1.category}</span>
                                <span className={styles.cardDate}>{standard1.date}</span>
                            </div>
                            <h3 className={styles.standardCardTitle}>
                                {standard1.title.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </h3>
                            <p className={styles.standardCardDesc}>
                                {standard1.description.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </p>
                        </div>
                    </article>

                    {/* Card 3: Standard — col 1, row 2 */}
                    <article className={styles.standardCard}>
                        <div className={styles.standardCardImageWrap}>
                            <Image src={standard2.image} alt={standard2.title.join(" ")} fill className={styles.standardCardImage} />
                            <div className={styles.standardCardImageGrad} />
                        </div>
                        <div className={styles.standardCardContent}>
                            <div className={styles.cardMetaRow}>
                                <span className={badgeClass[standard2.categoryStyle]}>{standard2.category}</span>
                                <span className={styles.cardDate}>{standard2.date}</span>
                            </div>
                            <h3 className={styles.standardCardTitle}>
                                {standard2.title.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </h3>
                            <p className={styles.standardCardDesc}>
                                {standard2.description.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </p>
                        </div>
                    </article>

                    {/* Card 4: Text/Data — col 2, row 2 */}
                    <article className={styles.textCard}>
                        <div className={styles.textCardIconDecor} aria-hidden>
                            <Image
                                src="/images/NewsPage/Icon.png"
                                alt=""
                                width={50}
                                height={50}
                                className={styles.textCardIconImg}
                            />
                        </div>
                        <div className={styles.textCardContent}>
                            <span className={styles.textCardCategory}>{text.category}</span>
                            <h3 className={styles.textCardTitle}>
                                {Array.isArray(text.title) ? (
                                    text.title.map((line, i, arr) => (
                                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                    ))
                                ) : (
                                    text.title
                                )}
                            </h3>
                            <p className={styles.textCardDesc}>
                                {Array.isArray(text.description) ? (
                                    text.description.map((line, i, arr) => (
                                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                    ))
                                ) : (
                                    text.description
                                )}
                            </p>
                            <a href={text.link} className={styles.cardLink}>
                                View Project Specs
                                <Image
                                    src="/images/NewsPage/arrow.png"
                                    alt="→"
                                    width={9}
                                    height={9}
                                    className={styles.cardLinkArrow}
                                />
                            </a>
                        </div>
                    </article>

                    {/* Card 5: Standard — col 3, row 2 */}
                    <article className={styles.standardCard}>
                        <div className={styles.standardCardImageWrap}>
                            <Image src={standard3.image} alt={standard3.title.join(" ")} fill className={styles.standardCardImage} />
                            <div className={styles.standardCardImageGrad} />
                        </div>
                        <div className={styles.standardCardContent}>
                            <div className={styles.cardMetaRow}>
                                <span className={badgeClass[standard3.categoryStyle]}>{standard3.category}</span>
                                <span className={styles.cardDate}>{standard3.date}</span>
                            </div>
                            <h3 className={styles.standardCardTitle}>
                                {standard3.title.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </h3>
                            <p className={styles.standardCardDesc}>
                                {standard3.description.map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </p>
                        </div>
                    </article>

                </div>

                {/* ── Pagination ── */}
                <div className={styles.pagination}>
                    {/* Prev */}
                    <button
                        className={styles.paginationArrow}
                        onClick={() => goToPage(Math.max(0, currentPage - 1))}
                        disabled={currentPage === 0}
                        aria-label="Previous page"
                    >
                        ‹
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`${styles.paginationBtn} ${currentPage === i ? styles.paginationBtnActive : ""}`}
                            onClick={() => goToPage(i)}
                            aria-label={`Page ${i + 1}`}
                            aria-current={currentPage === i ? "page" : undefined}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        className={styles.paginationArrow}
                        onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
                        disabled={currentPage === totalPages - 1}
                        aria-label="Next page"
                    >
                        ›
                    </button>
                </div>

            </div>
        </section>
    );
}
