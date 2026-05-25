'use client'
import { useLocale } from "next-intl";
import { usePathname, useRouter } from '@/i18n/navigation';
import { clsx } from "clsx";
import { Locale } from '@/types'

const locales: Locale[] = ['az', 'en', 'ru']

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleChange = (newLocale: Locale) => {
        router.push(pathname, { locale: newLocale, scroll: false })
    }

    return (
        <div className="flex items-center gap-1">
            {locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => handleChange(loc)}
                    className={clsx(
                        'px-2 py-1 text-sm rounded uppercase transition-colors cursor-pointer',
                        locale === loc ? 'text-white bg-violet-600'
                            : 'text-zinc-400 hover:text-white'
                    )}>
                    {loc}
                </button>
            ))}
        </div>
    )
}

