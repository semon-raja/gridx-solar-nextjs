import Image from "next/image";
import styles from "./page.module.css";

const services = [
  {
    id: "epcSolutions",
    icon: "/images/Servicepage/Solar_Epc.png",
    title: "Solar EPC Solutions",
    description: (
      <>
        End-to-end design, engineering, procurement, installation, testing
        <br />
        and commissioning for utility-scale projects.
      </>
    ),
    list: ["Site Assessment & Feasibility", "Custom Component Selection", "Regulatory Approvals"],
    image: "/images/Servicepage/service_grid.jpg",
    imageAlt: "Solar EPC Solutions – aerial view of a utility-scale solar farm",
    hasOverlay: true,
  },
  {
    id: "onGrid",
    icon: "/images/Servicepage/grid.png",
    title: "On-Grid Solar Systems",
    description: (
      <>
        Optimized for homes, commercial buildings,
        <br />
        and industries to reduce monthly electricity
        <br />
        bills efficiently.
      </>
    ),
  },
  {
    id: "offGrid",
    icon: "/images/Servicepage/off_grid.png",
    title: "Off-Grid Solar Systems",
    description: (
      <>
        Reliable battery backup solutions designed
        <br />
        for remote locations without grid access.
      </>
    ),
  },
  {
    id: "hybrid",
    icon: "/images/Servicepage/hybrid_solar.png",
    title: "Hybrid Solar Systems",
    description: (
      <>
        Combining panels, storage, and grid
        <br />
        connectivity for continuous, uninterrupted
        <br />
        power.
      </>
    ),
  },
  {
    id: "ess",
    icon: "/images/Servicepage/thunder.png",
    title: "Energy Storage (ESS)",
    description: (
      <>
        Advanced battery storage units for peak
        <br />
        shaving and backup in residential and
        <br />
        industrial use.
      </>
    ),
  },
  {
    id: "commercial",
    icon: "/images/Servicepage/indus.png",
    title: "Commercial & Industrial",
    description: (
      <>
        Custom solar solutions for factories, warehouses, hospitals, and
        <br />
        malls to maximize ROI.
      </>
    ),
    image: "/images/Servicepage/comm_ind.jpg",
    imageAlt: "Commercial & Industrial solar installation on a large facility roof",
  },
  {
    id: "residential",
    icon: "/images/Servicepage/home.png",
    title: "Residential Solar",
    description: (
      <>
        Premium systems specifically designed for
        <br />
        individual homes and luxury estates.
      </>
    ),
  },
  {
    id: "carport",
    icon: "/images/Servicepage/solar_carport.png",
    title: "Solar Carport",
    description: (
      <>
        Dual-purpose structures for residential and
        <br />
        commercial parking spaces, providing shade
        <br />
        and power.
      </>
    ),
  },
];

export default function CoreServices() {
  return (
    <section className={styles.coreServices}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.headerTextGroup}>
            <p className={styles.sectionHeader}>ENGINEERING PRECISION</p>
            <p className={styles.sectionDescription}>
              We provide a spectrum of solar energy solutions tailored to meet the energy demands of
              <br />
              modern infrastructure.
            </p>
          </div>
          <div className={styles.headerDivider}></div>
        </div>

        <div className={styles.bentoGrid}>
          {services.map((service) => {
            const isEpc = service.id === "epcSolutions";
            const isCommercial = service.id === "commercial";

            return (
              <div
                key={service.id}
                className={`${styles.bentoCard} ${isEpc ? styles.epcSolutions : ""} ${
                  isCommercial ? styles.commercialIndustrial : ""
                }`}
              >
                {/* Overlay+Blur circle – top-right corner of EPC card only */}
                {isEpc && <div className={styles.overlayBlur} aria-hidden="true" />}

                {isCommercial ? (
                  /* Commercial card: text on left, image on right */
                  <>
                    <div className={styles.cardContent}>
                      <div className={styles.cardIconWrapper}>
                        <Image src={service.icon} alt="" width={28} height={28} className={styles.cardIconImg} />
                      </div>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                    </div>
                    <div className={styles.cardImageWrapper}>
                      <Image src={service.image!} alt={service.imageAlt ?? ""} fill className={styles.cardImage} />
                    </div>
                  </>
                ) : (
                  /* All other cards */
                  <>
                    <div className={styles.cardIconWrapper}>
                      <Image src={service.icon} alt="" width={28} height={28} className={styles.cardIconImg} />
                    </div>

                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>

                    {/* Feature list (EPC only) */}
                    {service.list && (
                      <ul className={styles.epcList}>
                        {service.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Card image (EPC only) */}
                    {service.image && (
                      <div className={styles.cardImageWrapper}>
                        <Image src={service.image} alt={service.imageAlt ?? ""} fill className={styles.cardImage} />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
  x        </div>
      </div>
    </section>
  );
}
