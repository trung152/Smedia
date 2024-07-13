import { type ClassValue, clsx } from "clsx"
import localFont from 'next/font/local'
import { twMerge } from "tailwind-merge"

export const secretKey: string | undefined = process.env.NEXT_PUBLIC_SECRET_KEY;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const belyDisplayFont = localFont({
  src: [
    {
      path: '../../public/font/bely_display.otf',
      style: 'normal',
    },
  ],
})

export const scrollToSection = (sectionId : string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}