'use client'

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollTop() {
    const [visiable, setVisiable] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisiable(window.scrollY > 400)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!visiable) return null

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg transition-colors z-50 cursor-pointer">
            <ArrowUp size={20} />
        </button>
    )
}