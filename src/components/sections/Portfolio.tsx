'use client'
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import SectionHeader from "../ui/SectionHeader"
import Badge from "../ui/Badge"

const gradients = [
    'from-violet-600 to-indigo-600',
    'from-pink-600 to-rose-600',
    'from-emerald-600 to-teal-600',
    'from-orange-600 to-amber-600',
]

export default function Portfolio() {
    const t = useTranslations('portfolio')
    const values = ['fintech', 'ecommerce', 'healthcare', 'branding'] as const

    return (
        <section id="portfolio" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {values.map((p, i) => (
                        <motion.div
                            key={p}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-violet-500 transition-colors"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}>
                            <div className={`h-48 bg-linear-to-br ${gradients[i]}`} />
                            <div className="p-6 flex flex-col gap-3">
                                <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">
                                    {t(`items.${p}.category`)}
                                </span>
                                <h3 className="text-lg font-semibold text-white">
                                    {t(`items.${p}.title`)}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {t(`items.${p}.description`)}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {(t.raw(`items.${p}.tags`) as string[]).map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
