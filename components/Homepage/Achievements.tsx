import styles from "./page.module.css"
import Image from "next/image"

const achievements = [
  {
    icon: "/images/Homepage/cup.png",
    alt: "PV Port Solar Project",
    title:(
        <>
          Successfully Completed India&apos;s
          <br/>
          1st PV port solar project in BHU
          <br/>
          in collaboration with GIZ
        </>
    )
  },
  {
    icon: "/images/Homepage/verified.png",
    alt: "Most Bankable Company",
    title:(
        <>
          Most Bankable Company - BBB+ <br/> grade Equivalent
        </>
    )
  },
  {
    icon: "/images/Homepage/rev.png",
    alt: "Revenue Milestone",
    title:(
        <>
          Revenue Crossing 350 million <br/> INR
        </>
    )
  },
  {
    icon: "/images/Homepage/bage.png",
    alt: "Company of the Year",
    title: "Company of the Year - Energy Storage Project Integration 2024",
  },
  {
    icon: "/images/Homepage/ent.png",
    alt: "Young Entrepreneur 2017",
    title: "Young Entrepreneur 2017",
  },
];

export default function Achievements (){
    return(
        <section className={styles.achievements}>
            <div className={styles.container}>
                <p className={styles.sectionTag}>RECOGNITION</p>

                <h2 className={styles.sectionTitle}>
                Achievements
                </h2>

                <div className={styles.achievementGrid}>
                {achievements.map((item, index) => (
                    <div key={index} className={styles.achievementCard}>
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={27}
                        height={26}
                    />

                    <p>{item.title}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}