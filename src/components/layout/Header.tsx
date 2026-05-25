'use client'
import { clsx } from "clsx"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import Logo from "./Logo"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileMenu from "./MobileMenu"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
                scrolled && 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800'
            )}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Logo />
                <Nav />
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span className={clsx('block h-0.5 w-6 bg-white transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
                        <span className={clsx('block h-0.5 w-6 bg-white transition-all duration-300', menuOpen && 'opacity-0')} />
                        <span className={clsx('block h-0.5 w-6 bg-white transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
                    </button>
                </div>
            </div>
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    )
}