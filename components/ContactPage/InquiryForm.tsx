"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function InquiryForm() {
    return (
        <div className={styles.card}>

            {/* Header */}
            <div className={styles.header}>
                <h3 className={styles.title}>Send an Inquiry</h3>
                <p className={styles.subtitle}>
                    Our engineering team will respond within 24 hours.
                </p>
            </div>

            {/* Form */}
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

                {/* Full Name */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        className={styles.input}
                        placeholder="John Doe"
                        autoComplete="name"
                    />
                </div>

                {/* Email Address */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        placeholder="john@company.com"
                        autoComplete="email"
                    />
                </div>

                {/* Message / Requirements */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="message">
                        Message / Requirements
                    </label>
                    <textarea
                        id="message"
                        className={styles.textarea}
                        placeholder="Describe your project needs..."
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.submitBtn}>
                    <span className={styles.submitText}>Submit Inquiry</span>
                    <Image
                        src="/images/ContactPage/send.png"
                        alt="Send"
                        width={16}
                        height={14}
                        className={styles.sendIcon}
                    />
                </button>

                {/* Privacy Note */}
                <p className={styles.privacyNote}>
                    By submitting, you agree to our privacy policy.
                </p>

            </form>

        </div>
    );
}
