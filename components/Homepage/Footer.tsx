import styles from "./page.module.css"
import Image from "next/image"

const quickLinks = [
  "Projects",
  "LuxpowerTek",
  "Locations",
  "Careers",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Starc Energy",
];


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.footerTop}>

                {/* Column 1 */}

                <div className={styles.footerInfo}>
                    <div className={styles.footerLogo}>
                        <Image
                        src="/images/Homepage/10011.png"
                        alt="GridX Solar"
                        width={95}
                        height={34}
                        />
                    </div>

                    <p>
                    Empowering India's energy transition through
                    high-performance <br /> solar infrastructure and
                    engineering <br />  excellence since 2016.
                    </p>

                    <div className={styles.socialIcons}>
                    <div className={styles.socialIconBtn}>
                        <Image src="/images/Homepage/share.png" alt="Share" width={20} height={20}/>
                    </div>
                    <div className={styles.socialIconBtn}>
                        <Image src="/images/Homepage/f_globe.png" alt="Website" width={20} height={20}/>
                    </div>
                    </div>

                </div>

                {/* Column 2 */}

                <div className={styles.footerColumn}>

                    <h4>Quick Links</h4>

                    {quickLinks.map((link) => (
                    <a key={link} href="#">
                        {link}
                    </a>
                    ))}

                </div>

                {/* Column 3 */}

                <div className={styles.footerColumn}>

                    <h4>Legal</h4>

                    {legalLinks.map((link) => (
                    <a key={link} href="#">
                        {link}
                    </a>
                    ))}

                </div>

                {/* Column 4 */}

                <div className={styles.footerColumn}>

                    <h4>Stay Updated</h4>

                    <p>
                    Join our monthly newsletter for
                    energy insights.
                    </p>

                    <div className={styles.newsletter}>

                    <input
                        type="email"
                        placeholder="Email address"
                        suppressHydrationWarning
                    />

                    <button suppressHydrationWarning>
                        <div className={styles.SendImg}>
                            <Image
                            src="/images/Homepage/send.png"
                            alt="Send"
                            width={22}
                            height={22}
                            />
                        </div>
                    </button>

                    </div>

                </div>

                </div>

                <div className={styles.footerBottom}>
                © 2024 Gridx Solar. All rights reserved.
                </div>

            </div>
            </footer>
    )
}