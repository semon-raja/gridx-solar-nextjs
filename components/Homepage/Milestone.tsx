import styles from "./page.module.css";
import Image from "next/image";

const milestones = [
  {
    icon: "/images/Homepage/cup.png",
    text: "GIZ PV PORT PROJECT",
  },
  {
    icon: "/images/Homepage/star.png",
    text: "BBB+ CREDIT RATING",
  },
  {
    icon: "/images/Homepage/globe.png",
    text: "UN GLOBAL COMPACT MEMBER",
  },
];


export default function Milestone(){
    return(
        <section className={styles.milestones}>
        <div className={styles.container}>
            <div className={styles.milestonesWrapper}>
            {milestones.map((item, index) => (
                <div key={index} className={styles.milestoneItem}>
                <Image
                    src={item.icon}
                    alt={item.text}
                    width={30}
                    height={28}
                />

                <span>{item.text}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}