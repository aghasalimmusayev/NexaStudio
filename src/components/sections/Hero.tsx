'use client'
import { useTranslations } from "next-intl"
import Button from "../ui/Button"
import { motion } from "framer-motion"

export default function Hero() {
    const t = useTranslations('hero')

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    {t('headline')}
                </motion.h1>

                <motion.p
                    className="text-xl text-zinc-400 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <Button variant="primary">{t('cta_primary')}</Button>
                    <Button variant="outline">{t('cta_secondary')}</Button>
                </motion.div>

                <motion.div
                    className="flex justify-center gap-12 mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}>
                    <div>
                        <p className="text-4xl font-bold text-white">{t('stats.projects.value')}</p>
                        <p className="text-zinc-400">{t('stats.projects.label')}</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">{t('stats.experience.value')}</p>
                        <p className="text-zinc-400">{t('stats.experience.label')}</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">{t('stats.satisfaction.value')}</p>
                        <p className="text-zinc-400">{t('stats.satisfaction.label')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
