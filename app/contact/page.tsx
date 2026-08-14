import type { Metadata } from "next";
import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import ContactHero from "@/components/ContactPage/ContactHero";
import ContactInfo from "@/components/ContactPage/ContactInfo";
import InquiryForm from "@/components/ContactPage/InquiryForm";
import styles from "@/components/ContactPage/page.module.css";

export const metadata: Metadata = {
    title: "Contact Us | GridX Solar",
    description:
        "Get in touch with GridX Solar. Have a question or need a solar EPC solution? Our engineering team is ready to help.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <ContactHero />

            <section className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactLayout}>
                        <ContactInfo />
                        <InquiryForm />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
