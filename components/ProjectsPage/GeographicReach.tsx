import Image from "next/image";
import styles from "./page.module.css";

const states = [
  { id: "01", name: "Maharashtra" },
  { id: "02", name: "West Bengal" },
  { id: "03", name: "Assam" },
  { id: "04", name: "Uttar Pradesh" },
  { id: "05", name: "Kerala" },
  { id: "06", name: "Delhi / NCR" },
];

export default function GeographicReach() {
  return (
    <section className={styles.geoSection}>
      <div className={styles.container}>
        <div className={styles.geoInner}>
          {/* ── Left Column ─────────────────────────────── */}
          <div className={styles.geoLeft}>
            <div className={styles.geoTextBlock}>
              <h2 className={styles.geoTitle}>
                Our Geographic
                <br />
                Footprint
              </h2>
              <p className={styles.geoDescription}>
                Operating across 9 strategic states in India, Gridx Solar is
                scaling sustainable energy from the peaks of Haryana to the
                coasts of Kerala.
              </p>
            </div>

            {/* State grid — 2 columns */}
            <div className={styles.statesGrid}>
              {states.map((state) => (
                <div key={state.id} className={styles.stateItem}>
                  <span className={styles.stateNumber}>{state.id}</span>
                  <span className={styles.stateName}>{state.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ─────────────────────────────── */}
          <div className={styles.geoRight}>
            {/* Map background image */}
            <div className={styles.geoMapWrapper}>
              <Image
                src="/images/Projectspage/map_img.png"
                alt="Abstract India Map"
                fill
                className={styles.geoMapImage}
              />

              {/* Expanding Horizons card */}
              <div className={styles.geoCard}>
                <div className={styles.geoCardIconWrapper}>
                  <Image
                    src="/images/Projectspage/map.png"
                    alt="Map icon"
                    width={18}
                    height={18}
                    className={styles.geoCardIcon}
                  />
                </div>
                <div className={styles.geoCardText}>
                  <h3 className={styles.geoCardTitle}>Expanding Horizons</h3>
                  <p className={styles.geoCardSubtitle}>
                    Currently executing 5Mw+ in Jharkhand &amp; Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
