'use client'
import Image from "next/image";
type ImagePlaceholderProps = {
  imageUrl: string;
  ratio?: string; // tailwind aspect ratio class, e.g. "aspect-[4/3]"
  className?: string;
  dark?: boolean;
};

export default function ImagePlaceholder({
  imageUrl,
  ratio = "aspect-[4/3]",
  className = "",
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`placeholder-img relative flex items-center justify-center overflow-hidden rounded-2xl border ${
        dark
          ? "border-white/15 bg-white/5"
          : "border-[var(--color-line)] bg-[var(--color-cream)]"
      } ${ratio} ${className}`}
    >
      <div
        className={`flex flex-col items-center gap-2 px-6 text-center ${
          dark ? "text-white/60" : "text-[var(--color-ink)]/40"
        }`}
      >
        {
        imageUrl ? 
        <Image
          src={imageUrl}
          alt="Placeholder image"
          height={40}
          width={50}
        />
        :
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>

        }
        {/* <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span> */}
      </div>
    </div>
  );
}
