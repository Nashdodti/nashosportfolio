import { AppleAppIcon } from './AppleAppIcon';

export function ResumeIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(165deg,#ff7a6b_0%,#f54a3a_45%,#d32f2f_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g filter="url(#resumeShadow)">
          <path
            d="M8.5 4.5h11.2L24.5 9.3V26a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z"
            fill="white"
          />
        </g>
        <path d="M19.5 4.6V8a1.5 1.5 0 0 0 1.5 1.5h3.4" fill="#ffe8e6" opacity="0.9" />
        <path d="M8.5 4.5h11.2L24.5 9.3V26a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" stroke="rgba(211,47,47,0.1)" strokeWidth="0.5" />
        <rect x="11" y="13.2" width="10" height="1.8" rx="0.9" fill="#f54a3a" />
        <rect x="11" y="16.8" width="8.2" height="1.4" rx="0.7" fill="#ffb3ad" opacity="0.8" />
        <rect x="11" y="19.8" width="10" height="1.4" rx="0.7" fill="#ffb3ad" opacity="0.8" />
        <rect x="11" y="22.8" width="6.4" height="1.4" rx="0.7" fill="#ffb3ad" opacity="0.8" />
        <defs>
          <filter id="resumeShadow" x="4.5" y="4.5" width="22" height="25.5" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodOpacity="0.1" />
          </filter>
        </defs>
      </svg>
    </AppleAppIcon>
  );
}
