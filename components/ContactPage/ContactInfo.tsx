import Image from "next/image";
import styles from "./page.module.css";

const locations = [
    "NEW DELHI",
    "FARIDABAD",
    "KOCHI",
    "GUWAHATI",
    "MEGHALAYA",
    "ASANSOL",
    "LUCKNOW",
    "GHAZIABAD",
    "CHHATTISGARH",
];

/* ── Inline SVG icons ── */
const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" fill="#FFBA20"/>
    </svg>
);

const EmailIcon = () => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" fill="#FFBA20"/>
    </svg>
);

const WebIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41A7.984 7.984 0 0120 12c0 2.08-.81 3.97-2.1 5.39z" fill="#FFBA20"/>
    </svg>
);

const ArrowIcon = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h9m0 0v9m0-9L1 10" stroke="#FFBA20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ContactInfo() {
    return (
        <div className={styles.contactInfoCol}>

            {/* ── Head Office Card ── */}
            <div className={styles.headOfficeCard}>
                <div className={styles.headOfficeBlur} />

                {/* Badge + Heading */}
                <div className={styles.headOfficeTop}>
                    <div className={styles.headOfficeBadge}>
                        <Image
                            src="/images/ContactPage/headoffice.png"
                            alt="Head Office"
                            width={23}
                            height={21}
                            className={styles.headOfficeIcon}
                        />
                    </div>
                    <div className={styles.headOfficeTitles}>
                        <h2 className={styles.headOfficeTitle}>Head Office</h2>
                        <span className={styles.headOfficeSubtitle}>Global Headquarters</span>
                    </div>
                </div>

                {/* Address */}
                <div className={styles.addressRow}>
                    <Image
                        src="/images/ContactPage/location.png"
                        alt="Location"
                        width={16}
                        height={20}
                        className={styles.addressIcon}
                    />
                    <div className={styles.addressText}>
                        <span className={styles.addressLabel}>Address</span>
                        <p className={styles.addressBody}>
                            Plot No. 4, Khasra No. 96, Satbari,<br />
                            Ansal Villas, Chattarpur,<br />
                            New Delhi – 110074
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Contact Details Bento ── */}
            <div className={styles.contactBento}>

                {/* Direct Lines card */}
                <div className={styles.bentoCard}>
                    <div className={styles.bentoHeader}>
                        <PhoneIcon />
                        <span className={styles.bentoLabel}>Direct Lines</span>
                    </div>
                    <ul className={styles.phoneList}>
                        {["+91 99991 23078", "+91 99991 23038", "+91 96544 03042"].map((num) => (
                            <li key={num} className={styles.phoneItem}>
                                <a href={`tel:${num.replace(/\s/g, "")}`} className={styles.phoneLink}>
                                    <span className={styles.phoneNumber}>{num}</span>
                                    <ArrowIcon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Email + Web card */}
                <div className={styles.bentoCard}>
                    {/* Email */}
                    <div className={styles.bentoHeader}>
                        <EmailIcon />
                        <span className={styles.bentoLabel}>Email</span>
                    </div>
                    <div className={styles.digitalLinks}>
                        <a href="mailto:info@gridxsolar.in" className={styles.digitalLink}>info@gridxsolar.in</a>
                        <a href="mailto:info@starcenergy.com" className={styles.digitalLink}>info@starcenergy.com</a>
                    </div>

                    {/* Web */}
                    <div className={styles.bentoHeader} style={{ marginTop: "20px" }}>
                        <WebIcon />
                        <span className={styles.bentoLabel}>Web</span>
                    </div>
                    <div className={styles.digitalLinks}>
                        <a href="https://www.gridxsolar.in" target="_blank" rel="noopener noreferrer" className={styles.digitalLink}>www.gridxsolar.in</a>
                        <a href="https://www.starcenergy.com" target="_blank" rel="noopener noreferrer" className={styles.digitalLink}>www.starcenergy.com</a>
                    </div>
                </div>
            </div>

            {/* ── Office Locations ── */}
            <div className={styles.locationsSection}>
                <div className={styles.locationsTitleRow}>
                    <h3 className={styles.locationsTitle}>Office Locations</h3>
                    <div className={styles.locationsDivider} />
                </div>

                <div className={styles.locationsGrid}>
                    {locations.map((city) => (
                        <div key={city} className={styles.locationChip}>
                            <span className={styles.locationDot} />
                            <span className={styles.locationName}>{city}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
