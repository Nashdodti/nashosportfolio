import { AppleAppIcon } from './AppleAppIcon';

export function ExperienceIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(160deg,#7b6cff_0%,#5856d6_48%,#3b38b8_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M6 13.2h20a2.2 2.2 0 0 1 2.2 2.2v9.1A2.7 2.7 0 0 1 25.5 27H6.5A2.7 2.7 0 0 1 3.8 24.5v-9.1A2.2 2.2 0 0 1 6 13.2Z"
          fill="white"
        />
        <path
          d="M11.2 13.2V10a2.3 2.3 0 0 1 2.3-2.3h5A2.3 2.3 0 0 1 20.8 10v3.2"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <rect x="13.4" y="16.6" width="5.2" height="3.2" rx="1.2" fill="#5856d6" />
        <path d="M4.2 18.4h23.6" stroke="#ecebff" strokeWidth="1.4" />
      </svg>
    </AppleAppIcon>
  );
}
