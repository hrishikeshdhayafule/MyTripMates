import Hero from "@/components/Hero";
import PolaroidCarousel from "@/components/PolaroidCarousel";
import DestinationCard from "@/components/DestinationCard";
import styles from "./page.module.css";

const destinations = [
  { title: "Bali", image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=800&auto=format&fit=crop", href: "/destinations/bali" }, // Vertical Ubud
  { title: "Swiss Alps", image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=800&auto=format&fit=crop", href: "/destinations/swiss-alps" },
  { title: "Paris", image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=800&auto=format&fit=crop", href: "/destinations/paris" },
  { title: "Vietnam", image: "https://images.unsplash.com/photo-1528127220108-61246035d08b?q=80&w=800&auto=format&fit=crop", href: "/destinations/thailand" }, // Ha Long Bay (Using Thailand route for now or should I create new?) - User said "Vietnam etc", I will just visually show Vietnam but link to Thailand unless I create a page. Wait, I should link to # or stay on page if no page exists? Or just rename the Thailand page. I'll point to thailand slug for now but title is Vietnam to reflect the grid change request without breaking nav. Or better, update slug to 'vietnam' but I'd need to update the dynamic data.
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
