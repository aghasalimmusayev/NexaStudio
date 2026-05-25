import { clsx } from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export default function Button({
    children,
    variant = 'primary',
    className,
    onClick,
    type = 'button',
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                'px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer',
                variant === 'primary' && 'bg-violet-600 text-white hover:bg-violet-700',
                variant === 'outline' && 'border border-zinc-600 text-zinc-300 hover:border-violet-500 hover:text-violet-400',
                className
            )}
        >
            {children}
        </button>
    );
}
