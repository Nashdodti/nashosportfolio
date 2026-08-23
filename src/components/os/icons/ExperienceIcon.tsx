import { AppleAppIcon } from './AppleAppIcon';

export function ExperienceIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(165deg,#8b7fff_0%,#5e5ce6_50%,#4240c7_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g filter="url(#experienceShadow)">
          <path
            d="M6 13.2h20a2.2 2.2 0 0 1 2.2 2.2v9.1A2.7 2.7 0 0 1 25.5 27H6.5A2.7 2.7 0 0 1 3.8 24.5v-9.1A2.2 2.2 0 0 1 6 13.2Z"
            fill="white"
          />
        </g>
        <path
          d="M11.2 13.2V10a2.3 2.3 0 0 1 2.3-2.3h5A2.3 2.3 0 0 1 20.8 10v3.2"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="13.2" y="16.4" width="5.6" height="3.6" rx="1.3" fill="#5e5ce6" />
        <path d="M4.2 18.6h23.6" stroke="#f0efff" strokeWidth="1.5" opacity="0.85" />
        <path d="M6 13.2h20a2.2 2.2 0 0 1 2.2 2.2v9.1A2.7 2.7 0 0 1 25.5 27H6.5A2.7 2.7 0 0 1 3.8 24.5v-9.1A2.2 2.2 0 0 1 6 13.2Z" stroke="rgba(66,64,199,0.12)" strokeWidth="0.5" />
        <defs>
          <filter id="experienceShadow" x="3.8" y="13.2" width="24.4" height="15.8" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodOpacity="0.12" />
          </filter>
        </defs>
      </svg>
    </AppleAppIcon>
  );
}
