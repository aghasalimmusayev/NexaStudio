import { clsx } from 'clsx'

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
    return (
        <span className={clsx('px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700', className)}>
            {children}
        </span>
    )
}