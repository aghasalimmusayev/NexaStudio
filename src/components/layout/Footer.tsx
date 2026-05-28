import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
    const t = useTranslations('nav');

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 px-6">
            <div className="max-w-6xl mx-auto pt-8 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <Logo />

                    <nav className="flex flex-wrap justify-center items-center gap-6">
                        <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">{t('links.about')}</a>
                        <a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">{t('links.services')}</a>
                        <a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm">{t('links.portfolio')}</a>
                        <a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">{t('links.contact')}</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/agha-musayev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-zinc-400 hover:text-white transition-colors">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href="https://github.com/aghasalimmusayev/NexaStudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-zinc-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://wa.me/+994773997811"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-zinc-400 hover:text-white transition-colors">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 text-center text-zinc-500 text-sm">
                    © {new Date().getFullYear()} NexaStudio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
