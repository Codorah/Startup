import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  locale: string;
  className?: string;
}

export default function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center gap-2.5 group rounded-lg ${className}`}
      aria-label="Codorah"
    >
      <Image
        src="/codorah-mark.png"
        alt=""
        width={44}
        height={44}
        className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
        priority
      />
      <span className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold tracking-tight text-slate-900">
        Codorah
      </span>
    </Link>
  );
}
