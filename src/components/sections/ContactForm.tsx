'use client'
import { useTranslations } from "next-intl"
import Button from "../ui/Button"
import { useForm } from "react-hook-form"

export default function ContactForm() {
    const t = useTranslations('contact')
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-4">
            <input
                type="text"
                placeholder={t('form.name_placeholder')}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                {...register('name', { required: t('validation.name_required') })}
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name.message as string}</p>}
            <input
                type="email"
                placeholder={t('form.email_placeholder')}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                {...register('email', {
                    required: t('validation.email_required'),
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t('validation.email_invalid')
                    }
                })}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message as string}</p>}
            <textarea
                placeholder={t('form.message_placeholder')}
                rows={5}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                {...register('message', {
                    required: t('validation.message_required'),
                    minLength: { value: 10, message: t('validation.message_min') }
                })}
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message.message as string}</p>}
            <Button type="submit" variant="primary" className="self-start">
                {t('form.submit')}
            </Button>
        </form>
    )
}