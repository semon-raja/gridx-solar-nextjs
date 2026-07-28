'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from "./page.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <Link href="/" className={styles.navbar_logo}>
                        <Image
                            src="/images/Homepage/10011.png"
                            alt="GridX Solar"
                            width={150}
                            height={34}
                        />
                    </Link>

                    {/* Desktop nav links */}
                    <div className={styles.navbar_menu}>
                        <ul className={styles.navbar_links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Services</Link></li>
                            <li><Link href="/">Projects</Link></li>
                            <li><Link href="/">Partners</Link></li>
                            <li><Link href="/">News</Link></li>
                        </ul>
                    </div>

                    <div className={styles.navbar_rightSide}>
                       
                        <div className={styles.poweredBy}>
                            <p>Powered By</p>
                            <span>Starc Energy</span>
                        </div>

                        
                        <button className={styles.navbar_contactButton} suppressHydrationWarning>
                            Contact Us
                        </button>

                        
                        <button
                            className={styles.hamburger}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            onClick={() => setMenuOpen(prev => !prev)}
                            suppressHydrationWarning
                        >
                            {menuOpen ? (
                               
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="5" y1="5" x2="19" y2="19" />
                                    <line x1="19" y1="5" x2="5" y2="19" />
                                </svg>
                            ) : (
                               
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="3" y1="6"  x2="21" y2="6"  />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </nav>

            
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuLinks}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Partners</Link>
                    <Link href="/" onClick={() => setMenuOpen(false)}>News</Link>
                </div>

                
                <button
                    className={styles.mobileContactButton}
                    onClick={() => setMenuOpen(false)}
                    suppressHydrationWarning
                >
                    Contact Us
                </button>
            </div>
        </>
    );
}