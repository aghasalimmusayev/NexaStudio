'use client'
import { clsx } from "clsx"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import Logo from "./Logo"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

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
            <div className="w-[90%] m-auto flex justify-between">
                <Logo />
                <Nav />
                <LanguageSwitcher />
            </div>
        </header>
    )
}