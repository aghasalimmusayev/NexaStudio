'use client'
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import SectionHeader from "../ui/SectionHeader"

export default function About() {
    const t = useTranslations('about')
    const values = ['creativity', 'quality', 'transparency', 'innovation'] as const

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={t('title')} subtitle={t('mission')} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {values.map((key, i) => (
                        <motion.div
                            key={key}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-violet-500 transition-colors"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                {t(`values.${key}.title`)}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {t(`values.${key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
