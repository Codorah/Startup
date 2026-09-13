import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  locale: string;
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-full transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Codorah"
    >
      {/* Codorah Emblem Logo only — no adjacent text */}
      <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex items-center justify-center border border-slate-200/80">
        <Image
          src="/codorah logo.jpeg"
          alt="Codorah Logo"
          width={52}
          height={52}
          className="w-full h-full object-contain p-0.5"
          priority
        />
      </div>
    </Link>
  );
}
