"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./PolaroidCarousel.module.css";

const moments = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
        alt: "Bali Sunset",
        caption: "Bali, 2024",
        rotation: -4,
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Swiss Alps",
        caption: "Alps Escape",
        rotation: 2,
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        alt: "Paris Dinner",
        caption: "Parisian Nights",
        rotation: -2,
    },
];

export default function PolaroidCarousel() {
    return (
        <section className={styles.carouselSection}>
            <div className="container text-center">
                <h2 className={styles.heading}>Moments Worth Remembering</h2>
                <p className={styles.subHeading}>Glimpses from unforgettable journeys created by our travelers</p>
            </div>

            <div className={`${styles.gridContainer} container`}>
                {moments.map((moment, index) => (
                    <motion.div
                        key={moment.id}
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: moment.rotation }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                        className={styles.card}
                    >
                        {/* Polaroid tape effect */}
                        <div className={styles.tape} />

                        {/* Image Container */}
                        <div className={styles.imageContainer}>
                            <Image
                                src={moment.src}
                                alt={moment.alt}
                                fill
                                className={styles.image}
                            />
                        </div>

                        {/* Caption */}
                        <div className={styles.captionContainer}>
                            <p className={styles.caption} style={{ fontFamily: 'var(--font-caveat)' }}>
                                {moment.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
