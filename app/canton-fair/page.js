import Link from "next/link";
import styles from "./page.module.css";

export default function CantonFairPage() {
    return (
        <main className={styles.page}>
            {/* Professional Hero */}
            <div className={styles.hero}>
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
                    alt="Canton Fair/Guangzhou Skyline"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />

                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>Business & Trade</span>
                    <h1 className={styles.title}>China Canton Fair</h1>
                    <p className={styles.subtitle}>
                        Seamless logistics, premium accommodation, and exclusive business itineraries for the world's largest trade fair.
                    </p>
                    <div className={styles.buttonContainer}>
                        <a
                            href="https://wa.me/5555558800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            <MessageCircle size={20} />
                            Inquire for Canton Fair
                        </a>
                    </div>
                </div>

                {/* Grid Pattern */}
                <div className={styles.gridPattern} />
            </div>

            {/* Content Sections */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Logistics */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Logistics</h3>
                        <p className={styles.cardText}>
                            Visa assistance, fast-track entry, and private transfers from Guangzhou Baiyun International Airport to your hotel and the fair complex.
                        </p>
                    </div>

                    {/* Stays */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Premium Stays</h3>
                        <p className={styles.cardText}>
                            Curated selection of 5-star business hotels near the Pazhou Complex, ensuring comfort and convenience during your busy schedule.
                        </p>
                    </div>

                    {/* Itineraries */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Business Support</h3>
                        <p className={styles.cardText}>
                            On-ground translators, meeting room bookings, and local sourcing guides to help you maximize your trade fair success.
                        </p>
                    </div>
                </div>

                <div className={styles.footerNav}>
                    <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>
                    <p>Guangzhou, China</p>
                </div>
            </div>
        </main>
    );
}
