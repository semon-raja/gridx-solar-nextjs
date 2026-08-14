"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const filters = ["All", "On-Grid", "Hybrid", "ESS", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    image: "/images/Projectspage/card1.jpg",
    imageAlt: "Aerial view of North-East Logistics Park with rooftop solar panels",
    capacity: "1.2MW",
    capacityColor: "yellow",
    category: "INDUSTRIAL HUB",
    title: "North-East Logistics Park",
    location: "Guwahati, Assam",
    filter: "On-Grid",
  },
  {
    id: 2,
    image: "/images/Projectspage/card2.jpg",
    imageAlt: "Battery energy storage server racks for Delhi Smart City Microgrid",
    capacity: "500kWh ESS",
    capacityColor: "green",
    category: "BATTERY STORAGE",
    title: "Delhi Smart City Microgrid",
    location: "New Delhi",
    filter: "ESS",
  },
  {
    id: 3,
    image: "/images/Projectspage/card3.jpg",
    imageAlt: "Metropolis General Hospital with solar carport installation",
    capacity: "750kW",
    capacityColor: "yellow",
    category: "INSTITUTIONAL",
    title: "Metropolis General Hospital",
    location: "Mumbai, Maharashtra",
    filter: "Commercial",
  },
];

export default function ProjectPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>

        {/* ── Section Header ─────────────────────────────── */}
        <div className={styles.portfolioHeader}>
          <div className={styles.portfolioHeaderLeft}>
            <h2 className={styles.portfolioTitle}>Project Portfolio</h2>
            <p className={styles.portfolioDescription}>
              Explore our track record of high-performance installations<br />
              delivered with technical precision and industrial reliability.
            </p>
          </div>

          <div className={styles.filterTabs}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterTab} ${activeFilter === f ? styles.filterTabActive : ""}`}
                onClick={() => setActiveFilter(f)}
                suppressHydrationWarning
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ─────────────────────────────────── */}
        <div className={styles.portfolioGrid}>
          {filtered.map((project) => (
            <div key={project.id} className={styles.projectCard}>

              {/* Image */}
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Capacity Badge */}
                <span className={`${styles.capacityBadge} ${styles[`badge_${project.capacityColor}`]}`}>
                  {project.capacity}
                </span>
              </div>

              {/* Card Info */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <span className={styles.cardArrow}>↗</span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardLocation}>
                  <svg
                    className={styles.locationIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1C4.79 1 3 2.79 3 5C3 8.25 7 13 7 13C7 13 11 8.25 11 5C11 2.79 9.21 1 7 1ZM7 6.5C6.17 6.5 5.5 5.83 5.5 5C5.5 4.17 6.17 3.5 7 3.5C7.83 3.5 8.5 4.17 8.5 5C8.5 5.83 7.83 6.5 7 6.5Z"
                      fill="#D5C4AB"
                    />
                  </svg>
                  {project.location}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* ── View More Button ────────────────────────────── */}
        <div className={styles.viewMoreWrapper}>
          <button className={styles.viewMoreBtn} suppressHydrationWarning>
            View More Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10L4 6H12L8 10Z" fill="#FFDCA1" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
