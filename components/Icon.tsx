import type { ReactNode } from 'react'

// Ícones no estilo lucide (mesmos usados no app real).
const paths: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  scroll: (
    <>
      <path d="M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" />
      <path d="M8 7h6M8 11h6M8 15h4" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6" />
      <circle cx="16" cy="13" r="1.2" />
    </>
  ),
  trending: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h7v7" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1A2 2 0 1 1 7 4.6l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </>
  ),
  file: (
    <>
      <path d="M14 3v5h5" />
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M4 3v5a4 4 0 0 0 8 0V3" />
      <path d="M8 15a5 5 0 0 0 10 0v-3" />
      <circle cx="18" cy="9" r="2" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  receipt: (
    <>
      <path d="M4 4v17l3-2 3 2 3-2 3 2 3-2 1 2V4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a1.5 1.5 0 0 1-2.1 0L3 12.3V3h9.3l8.3 8.3a1.5 1.5 0 0 1 0 2.1z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 6.5 19z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  tooth: (
    <>
      <path d="M12 2c-3 0-5 1.5-5 1.5S5 3 3.5 4.5C2 6 2 8.5 3 11s1 4 1 7c0 2 .5 4 1.5 4S7 19 8 17s1.5-4 4-4 3 2 4 4 1.5 5 2.5 5 1.5-2 1.5-4c0-3 0-4.5 1-7s1-5 0-6.5C19.5 3 18 3.5 17 3.5S15 2 12 2z" />
    </>
  ),
  brain: (
    <>
      <path d="M9 3a3 3 0 0 0-3 3v0a3 3 0 0 0-3 3v0a3 3 0 0 0 1 2.2A3 3 0 0 0 5 17a3 3 0 0 0 4 3v0V3z" />
      <path d="M15 3a3 3 0 0 1 3 3v0a3 3 0 0 1 3 3v0a3 3 0 0 1-1 2.2A3 3 0 0 1 19 17a3 3 0 0 1-4 3v0V3z" />
    </>
  ),
  heart: (
    <>
      <path d="M19 14c1.5-1.5 3-3 3-5.5A4.5 4.5 0 0 0 17.5 4c-2 0-3 .5-5.5 3-2.5-2.5-3.5-3-5.5-3A4.5 4.5 0 0 0 2 8.5c0 2.5 1.5 4 3 5.5l7 7z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.5A8.5 8.5 0 1 1 12 3a8.5 8.5 0 0 1 8.5 8.5z" />
      <path d="m4 21 2-5" />
      <path d="M8.5 9.5q.5 4 5.5 5.5l1.2-1.4a1 1 0 0 1 1-.3l2.3.7" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
    </>
  ),
  cardiogram: (
    <>
      <path d="M3 12h3l2-5 4 10 2-5 2 3h5" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
