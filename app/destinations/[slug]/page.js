import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

// Mock Data Store
const destinations = {
    bali: {
        title: "Bali, Indonesia",
        subtitle: "Island of Gods",
        description: "Experience the magic of Bali with its pristine beaches, lush rice terraces, and vibrant culture. Perfect for couples seeking both relaxation and adventure.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Sunset Dinner at Jimbaran", "Private Pool Villa", "Ubud Art Market Tour"],
        packages: [
            { duration: "4 Nights / 5 Days", title: "Bali Bliss", price: "$1,200", features: ["Ubud Villa Stay", "Private Driver", "Airport Transfers"] },
            { duration: "6 Nights / 7 Days", title: "Island Explorer", price: "$1,800", features: ["Nusa Penida Trip", "Snorkeling", "Candlelight Dinner"] },
            { duration: "8 Nights / 9 Days", title: "Ultimate Honeymoon", price: "$2,500", features: ["Luxury Beachfront Resort", "Couples Spa", "Helicopter Tour"] }
        ]
    },
    "swiss-alps": {
        title: "Swiss Alps",
        subtitle: "Peak of Romance",
        description: "Breathtaking mountain views, cozy chalets, and world-class skiing. A winter wonderland for romantic getaways.",
        image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Scenic Train Ride", "Chocolate Tasting", "Private Ski Session"],
        packages: [
            { duration: "5 Nights / 6 Days", title: "Alpine Retreat", price: "$2,800", features: ["Chalet Stay", "Glacier Express", "Fondue Night"] },
            { duration: "7 Nights / 8 Days", title: "Swiss Grand Tour", price: "$3,500", features: ["Zurich to Geneve", "Lake Cruise", "First Class Rail"] }
        ]
    },
    paris: {
        title: "Paris, France",
        subtitle: "City of Love",
        description: "Walk along the Seine, visit the Louvre, and enjoy a romantic dinner at the Eiffel Tower. The ultimate destination for lovers.",
        image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Eiffel Tower Dinner", "Louvre Museum Tour", "Seine River Cruise"],
        packages: [
            { duration: "3 Nights / 4 Days", title: "Parisian Weekend", price: "$1,500", features: ["Boutique Hotel", "Skip-the-line Louvre", "Seine Cruise"] },
            { duration: "5 Nights / 6 Days", title: "Romance in Paris", price: "$2,200", features: ["Eiffel Tower Dinner", "Macaron Class", "Versailles Tour"] }
        ]
    },
    thailand: {
        title: "Thailand",
        subtitle: "The Land of Smiles",
        description: "From the bustling streets of Bangkok to the serene islands of the south, Thailand offers a perfect mix of adventure and relaxation.",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Bangkok Street Food Tour", "Island Hopping in Krabi", "Elephant Sanctuary Visit", "Luxury Beach Resort"],
        packages: [
            { duration: "6 Nights / 7 Days", title: "Tropical Escape", price: "$1,400", features: ["Phuket Beachfront", "Phi Phi Island Tour", "Thai Massage"] },
            { duration: "9 Nights / 10 Days", title: "Best of Thailand", price: "$2,000", features: ["Bangkok & Chiang Mai", "Cooking Class", "Floating Market"] }
        ]
    },
    maldives: {
        title: "Maldives",
        subtitle: "Tropical Paradise",
        description: "Escape to the ultimate island sanctuary. pristine white sands, crystal clear waters, and overwater villas await you.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Overwater Villa Stay", "Snorkeling with Mantas", "Private Sandbank Lunch", "Sunset Dolphin Cruise"],
        packages: [
            { duration: "4 Nights / 5 Days", title: "Lagoon Luxury", price: "$3,200", features: ["Water Villa", "All-Inclusive", "Seaplane Transfer"] },
            { duration: "7 Nights / 8 Days", title: "Ocean Sanctuary", price: "$5,000", features: ["Sunset Water Villa", "Private Butler", "Underwater Dining"] }
        ]
    },
    "canton-fair": {
        title: "Canton Fair, China",
        subtitle: "Global Trade Hub",
        description: "The world's largest trade fair. Plan your business trip with ease, comfort, and professional support.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
        highlights: ["Trade Fair Registration", "Translator Services", "Factory Visits", "5-Star Business Hotel"],
        packages: [
            { duration: "5 Nights / 6 Days", title: "Business Standard", price: "$1,800", features: ["Fair Entry Badge", "Airport Pickup", "Hotel near Pazhou"] },
            { duration: "8 Nights / 9 Days", title: "Executive Trade", price: "$2,800", features: ["Private Translator", "Chauffeur Service", "Networking Dinner"] }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(destinations).map((slug) => ({ slug }));
}

export default async function DestinationPage({ params }) {
    const { slug } = await params;
    const data = destinations[slug];

    if (!data) {
        return notFound();
    }

    return (
        // REMOVED bg-[var(--marketing-dark)] text-white to fix visibility on white theme
        <main className="min-h-screen">
            {/* Hero Header */}
            <div className={styles.hero}>
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay} />

                <div className={`${styles.heroContent} container`}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.subtitle} style={{ fontFamily: 'var(--font-caveat)' }}>{data.subtitle}</p>
                </div>

                {/* Back Link */}
                <Link href="/" className={styles.backLink}>
                    &larr; Back
                </Link>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Description & Packages */}
                    <div>
                        <h2 className={styles.sectionTitle}>Experience</h2>
                        <p className={styles.description} style={{ color: 'var(--marketing-dark)' }}>
                            {/* Explicit dark color for visibility */}
                            {data.description}
                        </p>

                        <div className={styles.packagesContainer}>
                            <h3 className={styles.subTitle}>Select Your Itinerary</h3>
                            <div className={styles.packageList}>
                                {data.packages?.map((pkg, i) => (
                                    <div key={i} className={styles.packageCard}>
                                        <div className={styles.pkgHeader}>
                                            <span className={styles.pkgDuration}>{pkg.duration}</span>
                                            <span className={styles.pkgPrice}>{pkg.price}</span>
                                        </div>
                                        <h4 className={styles.pkgTitle}>{pkg.title}</h4>
                                        <ul className={styles.pkgFeatures}>
                                            {pkg.features.map((f, j) => (
                                                <li key={j}>• {f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.inquireButton}
                            >
                                Inquire about packages
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Highlights box */}
                    <div>
                        <div className={styles.highlightsBox}>
                            <h3 className={styles.sectionTitle} style={{ color: 'white' }}>Trip Highlights</h3>
                            <ul className={styles.highlightsList}>
                                {data.highlights.map((item, index) => (
                                    <li key={index} className={styles.highlightItem}>
                                        <div className={styles.dot} />
                                        <span className={styles.highlightText}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
