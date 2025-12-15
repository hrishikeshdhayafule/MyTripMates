"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./DestinationCard.module.css";

export default function DestinationCard({ title, image, href }) {
    return (
        <Link href={href || "#"} className={styles.card}>
            <motion.div
                whileHover={{ y: -10 }}
                className="h-full w-full relative" // Framer motion wrapper can just be internal or wrap content
            >
                {/* Image Background */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                    {/* Overlay Gradient */}
                    <div className={styles.gradientOverlay} />
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.underline} />
                    <p className={styles.cta}>
                        Explore curated itineraries &rarr;
                    </p>
                </div>
            </motion.div>
        </Link>
    );
}
