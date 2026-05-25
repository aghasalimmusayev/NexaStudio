'use client'
import { clsx } from "clsx"
import { useTranslations } from "next-intl"

interface MobileMenuProps {
    open: boolean
    onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
    const t = useTranslations('nav')

    return (
        <div className={clsx(
            'md:hidden fixed left-0 right-0 top-16 z-40 transition-all duration-400 overflow-hidden',
            open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}>
            <nav className="flex flex-col gap-4 py-4 px-6 bg-black/60">
                <a href="#about" onClick={onClose} className="text-zinc-100 hover:text-purple-400 transition-colors">{t('links.about')}</a>
                <a href="#services" onClick={onClose} className="text-zinc-100 hover:text-purple-400 transition-colors">{t('links.services')}</a>
                <a href="#portfolio" onClick={onClose} className="text-zinc-100 hover:text-purple-400 transition-colors">{t('links.portfolio')}</a>
                <a href="#contact" onClick={onClose} className="text-zinc-100 hover:text-purple-400 transition-colors">{t('links.contact')}</a>
            </nav>
        </div>
    )
}
