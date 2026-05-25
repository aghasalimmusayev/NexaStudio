import { useTranslations } from "next-intl"

export default function Nav() {

    const t = useTranslations('nav')

    return (
        <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">{t('links.about')}</a>
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">{t('links.services')}</a>
            <a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">{t('links.portfolio')}</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">{t('links.contact')}</a>
        </nav>
    )
}