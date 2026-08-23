import { AppleAppIcon } from './AppleAppIcon';

export function ResumeIcon() {
  return (
    <AppleAppIcon gradient="bg-[linear-gradient(160deg,#ff6b5b_0%,#d93829_55%,#b91c1c_100%)]">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M8.5 4.5h11.2L24.5 9.3V26a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z"
          fill="white"
        />
        <path d="M19.5 4.6V8a1.5 1.5 0 0 0 1.5 1.5h3.4" fill="#f4c7c2" />
        <rect x="11" y="13.2" width="10" height="1.6" rx="0.8" fill="#d93829" />
        <rect x="11" y="16.6" width="8.2" height="1.3" rx="0.65" fill="#e8b4ae" />
        <rect x="11" y="19.6" width="10" height="1.3" rx="0.65" fill="#e8b4ae" />
        <rect x="11" y="22.6" width="6.4" height="1.3" rx="0.65" fill="#e8b4ae" />
      </svg>
    </AppleAppIcon>
  );
}
