import { AppleAppIcon } from './AppleAppIcon';

export function ProjectsIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(165deg,#ffeb3b_0%,#ffc107_55%,#f9a825_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g filter="url(#projectsShadow)">
          <path
            d="M5.2 12.4c0-1.2.9-2.1 2.1-2.1h5.4l1.7 2.1H24.6c1.2 0 2.2 1 2.2 2.2v9.1c0 1.4-1.1 2.5-2.5 2.5H7.7A2.5 2.5 0 0 1 5.2 23.7V12.4Z"
            fill="white"
            fillOpacity="0.95"
          />
        </g>
        <path
          d="M5.2 15.6h21.6v8.1c0 1.4-1.1 2.5-2.5 2.5H7.7A2.5 2.5 0 0 1 5.2 23.7V15.6Z"
          fill="#fff9e6"
        />
        <path d="M5.2 12.4c0-1.2.9-2.1 2.1-2.1h5.4l1.7 2.1H24.6c1.2 0 2.2 1 2.2 2.2v9.1c0 1.4-1.1 2.5-2.5 2.5H7.7A2.5 2.5 0 0 1 5.2 23.7V12.4Z" stroke="rgba(249,168,37,0.15)" strokeWidth="0.5" />
        <defs>
          <filter id="projectsShadow" x="5.2" y="10.3" width="21.6" height="16.9" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodOpacity="0.1" />
          </filter>
        </defs>
      </svg>
    </AppleAppIcon>
  );
}
