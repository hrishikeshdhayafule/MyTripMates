import styles from "./Footer.module.css";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            MyTripMates
                        </Link>
                        <p className={styles.tagline}>
                            Curating unforgettable, customized travel experiences for couples who seek romance, adventure, and connection.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/destinations/bali" className={styles.link}>Bali</Link></li>
                            <li><Link href="/destinations/swiss-alps" className={styles.link}>Swiss Alps</Link></li>
                            <li><Link href="/destinations/paris" className={styles.link}>Paris</Link></li>
                            <li><Link href="/canton-fair" className={styles.link}>Canton Fair</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                            <li><Link href="/careers" className={styles.link}>Careers</Link></li>
                            <li><Link href="/blog" className={styles.link}>Travel Blog</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className={styles.columnTitle}>Support</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/faq" className={styles.link}>FAQs</Link></li>
                            <li><Link href="/privacy" className={styles.link}>Privacy Policy</Link></li>
                            <li><Link href="/terms" className={styles.link}>Terms of Service</Link></li>
                            <li><Link href="/refunds" className={styles.link}>Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} MyTripMates. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="mailto:hello@mytripmates.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                            <Mail size={16} /> hello@mytripmates.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
