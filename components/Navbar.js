"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    MyTripMates
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/5555558800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <MessageCircle size={18} />
                        <span>DM us on WhatsApp</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
