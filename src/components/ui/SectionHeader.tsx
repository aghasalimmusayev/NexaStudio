'use client'
import { motion } from "framer-motion"

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            {subtitle && <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
    )
}
