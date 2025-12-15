"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

const heroImages = [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop", // Swiss Alps/Nature
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop", // Bali/Tropical
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop", // Paris/City
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Ambience & Slideshow */}
            <div className={styles.bgLayer}>
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={index}
                        src={heroImages[index]}
                        alt="Hero Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.9, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2, /* Slow cross-fade as requested */
                            ease: "easeOut"
                        }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </AnimatePresence>
            </div>
            <div className={styles.glowLayer} />

            {/* Main Content */}
            <div className={`${styles.content} container`}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.badge}
                >
                    Premium Travel Experiences
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.heading}
                >
                    Create memories that <br />
                    <span className={styles.accent}>last forever</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.subtext}
                >
                    Handcrafted travel experiences designed for couples seeking adventure, romance, and authentic connections. From Bali to Maldives, let's plan your dream escape together.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={styles.actions}
                >
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        <MessageCircle size={20} />
                        <span>DM us on WhatsApp</span>
                    </a>

                    <a href="#destinations" className={styles.secondaryLink}>
                        Explore Destinations <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className={styles.statsContainer}
                >
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>500+</span>
                        <span className={styles.statLabel}>Happy Couples</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>15+</span>
                        <span className={styles.statLabel}>Destinations</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            4.9 <Star size={20} fill="currentColor" />
                        </span>
                        <span className={styles.statLabel}>Average Rating</span>
                    </div>
                </motion.div>

            </div>

            {/* Decorative Texture/Overlay */}
            <div className={styles.textureOverlay}
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
            </div>

            {/* Floating Depth Elements */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 0.8 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`${styles.floatingElement} ${styles.float1}`}
            >
                <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop" alt="" className={styles.floatImage} />
            </motion.div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 20, 0], opacity: 0.9 }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`${styles.floatingElement} ${styles.float2}`}
            >
                <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&auto=format&fit=crop" alt="" className={styles.floatImage} />
            </motion.div>
        </section>
    );
}
