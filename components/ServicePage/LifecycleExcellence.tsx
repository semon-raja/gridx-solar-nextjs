import Image from "next/image";
import styles from "./page.module.css";

const lifecycleServices = [
  {
    id: "installation",
    icon: "/images/Servicepage/Install.png",
    title: "Installation",
    description: "Professional setup by experienced teams adhering to the highest safety and quality standards in the industry.",
  },
  {
    id: "amc",
    icon: "/images/Servicepage/AMC.png",
    title: "AMC Plans",
    description: "Annual Maintenance Contracts including regular inspections, panel cleaning, and preventive technical maintenance.",
  },
  {
    id: "afterSales",
    icon: "/images/Servicepage/after_sales.png",
    title: "After Sales Support",
    description: "Use the GRIDX Mobile App for instant complaint booking, real-time performance tracking, and service requests.",
    badge: "GRIDX APP"
  }
];

export default function LifecycleExcellence() {
  return (
    <section className={styles.lifecycleSection}>
      <div className={styles.container}>
        <div className={styles.lifecycleHeader}>
          <h2 className={styles.lifecycleTitle}>LIFECYCLE EXCELLENCE</h2>
          <p className={styles.lifecycleDescription}>
            Our commitment doesn't end at installation. We ensure your investment continues to perform<br />
            at its peak for decades.
          </p>
        </div>

        <div className={styles.lifecycleGrid}>
          {lifecycleServices.map((service) => {
            const isThirdCard = service.id === "afterSales";
            return (
              <div
                key={service.id}
                className={`${styles.lifecycleCard} ${isThirdCard ? styles.lifecycleCardHighlight : ""}`}
              >
                <div className={styles.lifecycleCardHeader}>
                  <Image src={service.icon} alt={service.title} width={24} height={24} className={styles.lifecycleIcon} />
                  {service.badge && (
                    <span className={styles.lifecycleBadge}>{service.badge}</span>
                  )}
                </div>
                <h3 className={styles.lifecycleCardTitle}>{service.title}</h3>
                <p className={styles.lifecycleCardDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

