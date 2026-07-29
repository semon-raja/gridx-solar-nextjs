'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const ALL_PROJECTS = [
    {
        image: '/images/Homepage/10002.jpeg',
        capacity: '50Kw/72Kwh',
        title: 'ESS Project Solar Hybrid',
        location: 'UDALGURI, ASSAM',
        tab: 'Assam',
    },
    {
        image: '/images/Homepage/10007.jpeg',
        capacity: '20Kw/36Kwh',
        title: 'ESS Project Solar Hybrid',
        location: 'BONGAIGAON, ASSAM',
        tab: 'Assam',
    },
    {
        image: '/images/Homepage/10008.jpeg',
        capacity: '50Kw/60Kwh',
        title: 'ESS Project Solar Hybrid',
        location: 'GUWAHATI, ASSAM',
        tab: 'Assam',
    },
    {
        image: '/images/Homepage/10007.jpeg',
        capacity: '450Kw On Grid',
        title: 'On-Grid Solar Project',
        location: 'DELHI',
        tab: 'Delhi',
    },
    {
        image: '/images/Homepage/10008.jpeg',
        capacity: '100Kw/120Kwh',
        title: 'ESS Project Solar Hybrid',
        location: 'DELHI',
        tab: 'Delhi',
    },
    {
        image: '/images/Homepage/10002.jpeg',
        capacity: '300Kw Solar Ongrid',
        title: 'On-Grid Solar Project',
        location: 'CHANDIGARH',
        tab: 'Chandigarh',
    },
    {
        image: '/images/Homepage/10007.jpeg',
        capacity: '50Kw/60Kwh',
        title: 'ESS Project Solar Hybrid',
        location: 'CHANDIGARH',
        tab: 'Chandigarh',
    },
];

const TABS = ['All', 'Delhi', 'Assam', 'Chandigarh'];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('All');

    const filtered =
        activeTab === 'All'
            ? ALL_PROJECTS
            : ALL_PROJECTS.filter((p) => p.tab === activeTab);

    // Show max 3 cards
    const displayed = filtered.slice(0, 3);

    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>

                <div className={styles.portfolioHeader}>
                    <div className={styles.portfolioContent}>
                        <p className={styles.portfolioLabel}>PORTFOLIO</p>
                        <h2 className={styles.portfolioTitle}>Impact Across India</h2>
                    </div>

                    {/* ── Tabs ── */}
                    <div className={styles.portfolioTabs}>
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                className={activeTab === tab ? styles.activeTab : styles.tab}
                                onClick={() => setActiveTab(tab)}
                                suppressHydrationWarning
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Project Grid ── */}
                <div className={styles.projectGrid} key={activeTab}>
                    {displayed.map((project, index) => (
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
                    ))}
                </div>

            </div>
        </section>
    );
}
