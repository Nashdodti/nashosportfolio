import { AppleAppIcon } from './AppleAppIcon';

export function ContactIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(165deg,#4ade80_0%,#34c759_55%,#28a745_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g filter="url(#contactShadow)">
          <rect x="4.5" y="8.2" width="23" height="15.6" rx="3" fill="white" />
        </g>
        <path
          d="M6.2 10.3 16 17.4l9.8-7.1"
          stroke="#28a745"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="4.5" y="8.2" width="23" height="15.6" rx="3" stroke="rgba(40,167,69,0.12)" strokeWidth="0.5" />
        <defs>
          <filter id="contactShadow" x="4.5" y="8.2" width="23" height="15.6" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodOpacity="0.1" />
          </filter>
        </defs>
      </svg>
    </AppleAppIcon>
  );
}
