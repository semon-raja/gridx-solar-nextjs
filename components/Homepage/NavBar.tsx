'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from "./page.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/",         label: "Home",     exact: true  },
        { href: "/About",    label: "About",    exact: true  },
        { href: "/Services", label: "Services", exact: false },
        { href: "/Projects", label: "Projects", exact: false },
        { href: "/Partners", label: "Partners", exact: false },
        { href: "/News",     label: "News",     exact: false },
    ];

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
                            {navLinks.map((link) => {
                                const isActive = link.exact
                                    ? pathname === link.href
                                    : pathname.startsWith(link.href);
                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className={isActive ? styles.activeLink : ''}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
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
                    <Link href="/About" onClick={() => setMenuOpen(false)}>About</Link>
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