import { AppleAppIcon } from './AppleAppIcon';

export function ContactIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(160deg,#34c759_0%,#248a3d_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="4.5" y="8.2" width="23" height="15.6" rx="3" fill="white" />
        <path
          d="M6.2 10.1 16 17.2l9.8-7.1"
          stroke="#248a3d"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AppleAppIcon>
  );
}
