import { AppleAppIcon } from './AppleAppIcon';

export function AboutIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(160deg,#5ac8fa_0%,#0a84ff_48%,#0066d6_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="16" cy="12.2" r="5.1" fill="white" />
        <path
          d="M7.2 26.4c.6-4.6 4.2-7.4 8.8-7.4s8.2 2.8 8.8 7.4"
          stroke="white"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
    </AppleAppIcon>
  );
}
