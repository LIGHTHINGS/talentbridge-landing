'use client';

import React from 'react';
import Image from 'next/image';

interface ImagePlaceholderProps {
  label?: string;
  description?: string;
  imageUrl?: string;
  aspectRatio?: string;
  className?: string;
  dark?: boolean;
  children?: React.ReactNode;
}

export default function ImagePlaceholder({
  label = 'Image Placeholder',
  description,
  imageUrl,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  dark = false,
  children,
}: ImagePlaceholderProps) {
  // If an image URL is supplied, render the image
  if (imageUrl) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${aspectRatio} ${className}`}
      >
        <Image
          src={imageUrl}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`placeholder-grid relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border transition-all ${
        dark
          ? 'border-white/15 bg-[#121629] text-white'
          : 'border-gray-200/80 bg-gradient-to-b from-gray-50 to-gray-100/70 text-gray-800'
      } ${aspectRatio} ${className}`}
    >
      {/* Background subtle diagonal stripe pattern */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark ? 'opacity-10' : 'opacity-20'
        }`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${
            dark ? '#ffffff' : '#000000'
          } 0, ${
            dark ? '#ffffff' : '#000000'
          } 1px, transparent 0, transparent 16px)`,
        }}
      />

      {/* Central placeholder badge */}
      <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center px-6 text-center">
        <div
          className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
            dark
              ? 'bg-white/10 text-orange-400'
              : 'bg-white text-[#f2622a] border border-orange-100'
          }`}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>

        <p
          className={`text-sm font-semibold tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {label}
        </p>

        {description ? (
          <p
            className={`mt-1 text-xs leading-relaxed ${
              dark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {description}
          </p>
        ) : (
          <p
            className={`mt-1 text-xs ${
              dark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Placeholder image area • Add image source here
          </p>
        )}
      </div>

      {/* Any overlays or floating badges inside the container */}
      {children}
    </div>
  );
}
