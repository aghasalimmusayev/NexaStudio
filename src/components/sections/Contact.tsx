'use client'
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import SectionHeader from "../ui/SectionHeader"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import ContactForm from "./ContactForm"

export default function Contact() {
    const t = useTranslations('contact')

    const contactInfo = [
        { Icon: MapPin, label: t('sidebar.address_label'), value: t('sidebar.address') },
        { Icon: Mail,   label: t('sidebar.email_label'),   value: t('sidebar.email') },
        { Icon: Phone,  label: t('sidebar.phone_label'),   value: t('sidebar.phone') },
        { Icon: Clock,  label: t('sidebar.hours_label'),   value: t('sidebar.hours') },
    ]

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        <ContactForm />
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        {contactInfo.map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="p-2 bg-violet-600/20 rounded-lg mt-1">
                                    <Icon size={18} className="text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">{label}</p>
                                    <p className="text-white">{value}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
