import Image from "next/image";
import styles from "./page.module.css";

const partners = [
    {
        id: "solar-modules",
        logo: "/images/Partners/solar_module.png",
        title: "Solar Modules",
        alt: "Solar Modules partner logo",
    },
    {
        id: "inverter-systems",
        logo: "/images/Partners/inverter_systems.png",
        title: "Inverter Systems",
        alt: "Inverter Systems partner logo",
    },
    {
        id: "energy-storage",
        logo: "/images/Partners/energy_storage.png",
        title: "Energy Storage",
        alt: "Energy Storage partner logo",
    },
    {
        id: "micro-inverters",
        logo: "/images/Partners/micro_inverter.png",
        title: "Micro Inverters",
        alt: "Micro Inverters partner logo",
    },
];

export default function TrustedPartnerGrid() {
    return (
        <section className={styles.trustedPartnersSection}>
            <div className={styles.trustedContainer}>

                {/* ── Header Row ─────────────────────────────────── */}
                <div className={styles.partnersHeader}>

                    {/* Left — Heading + Description */}
                    <div className={styles.partnersHeaderLeft}>
                        <h2 className={styles.partnersHeading}>
                            Trusted Technology Partners
                        </h2>
                        <p className={styles.partnersDescription}>
                            We work with leading brands to deliver reliable solar modules, inverters and energy storage
                            solutions.
                        </p>
                    </div>

                    {/* Right — Authorized Technology Partner badge */}
                    <div className={styles.partnersBadge}>
                        Authorized Technology Partner
                    </div>

                </div>

                {/* ── Partner Cards ───────────────────────────────── */}
                <div className={styles.partnersGrid}>
                    {partners.map((partner) => (
                        <div key={partner.id} className={styles.partnerCard}>
                            <div className={styles.partnerLogoWrap}>
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={74}
                                    height={40}
                                    className={styles.partnerLogo}
                                />
                            </div>
                            <p className={styles.partnerCardTitle}>
                                {partner.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
