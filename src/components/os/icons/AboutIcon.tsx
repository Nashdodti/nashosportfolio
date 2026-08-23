import { AppleAppIcon } from './AppleAppIcon';

export function AboutIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(165deg,#64d2ff_0%,#2196f3_50%,#0d8bf2_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g filter="url(#aboutShadow)">
          <circle cx="16" cy="11.8" r="5.3" fill="white" />
          <path
            d="M7.2 26.2c.6-4.8 4.4-7.6 8.8-7.6s8.2 2.8 8.8 7.6"
            stroke="white"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter id="aboutShadow" x="5" y="6" width="22" height="22" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodOpacity="0.12" />
          </filter>
        </defs>
      </svg>
    </AppleAppIcon>
  );
}
