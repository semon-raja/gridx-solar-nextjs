import styles from "./page.module.css"
import Image from "next/image"

const achievements = [
  {
    icon: "/images/Homepage/cup.png",
    alt: "PV Port Solar Project",
    width: 22.5,
    height: 22.5,
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
    icon: "/images/Homepage/verified_achi.png",
    alt: "Most Bankable Company",
    width: 27.5,
    height: 26.25,
    title:(
        <>
          Most Bankable Company - BBB+ <br/> grade Equivalent
        </>
    )
  },
  {
    icon: "/images/Homepage/rev.png",
    alt: "Revenue Milestone",
    width: 25,
    height: 15,
    title:(
        <>
          Revenue Crossing 350 million <br/> INR
        </>
    )
  },
  {
    icon: "/images/Homepage/bage.png",
    alt: "Company of the Year",
    width: 20,
    height: 26.25,
    title: "Company of the Year - Energy Storage Project Integration 2024",
  },
  {
    icon: "/images/Homepage/ent.png",
    alt: "Young Entrepreneur 2017",
    width: 20,
    height: 20,
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
                        width={Math.ceil(item.width)}
                        height={Math.ceil(item.height)}
                        style={{ width: item.width, height: item.height }}
                    />

                    <p>{item.title}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}