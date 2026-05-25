'use client'
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import SectionHeader from "../ui/SectionHeader"
import Badge from "../ui/Badge"
import { Palette, Globe, Smartphone, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function Services() {
    const t = useTranslations('services')
    const values = ['uiux', 'web', 'mobile', 'brand', 'motion', 'seo'] as const

    const icons = {
        uiux: Palette,
        web: Globe,
        mobile: Smartphone,
        brand: Sparkles,
        motion: Zap,
        seo: TrendingUp,
    }

    return (
        <section id="services" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {values.map((val, i) => {
                        const Icon = icons[val]
                        return (
                        <motion.div
                            key={val}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-violet-500 transition-colors flex flex-col gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}>
                            <div className="p-2 bg-violet-600/20 rounded-lg w-fit">
                                <Icon size={22} className="text-violet-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {t(`items.${val}.title`)}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                                {t(`items.${val}.description`)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {(t.raw(`items.${val}.tags`) as string[]).map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        </motion.div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
