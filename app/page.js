import Hero from "@/components/Hero";
import PolaroidCarousel from "@/components/PolaroidCarousel";
import DestinationCard from "@/components/DestinationCard";
import styles from "./page.module.css";

const destinations = [
  { title: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", href: "/destinations/bali" },
  { title: "Swiss Alps", image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=800&auto=format&fit=crop", href: "/destinations/swiss-alps" },
  { title: "Paris", image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=800&auto=format&fit=crop", href: "/destinations/paris" },
  { title: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop", href: "/destinations/thailand" },
  { title: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop", href: "/destinations/maldives" },
  { title: "Canton Fair", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", href: "/canton-fair" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <PolaroidCarousel />

      <section className={styles.destinationSection} id="destinations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular <span className={styles.highlight}>Destinations</span></h2>
            <p className={styles.sectionSubtitle}>Hand-picked locations for your next romantic getaway.</p>
          </div>

          <div className={styles.grid}>
            {destinations.map((dest, i) => (
              <DestinationCard key={i} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className={styles.footer}>
        <p>© 2024 MyTripMates. All rights reserved.</p>
      </footer>
    </main>
  );
}
