export function DiscordIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="discord-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#0052cc" />
          <stop offset="100%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="88" height="68" rx="12" stroke="url(#discord-grad)" strokeWidth="2" fill="none" />
      <circle cx="42" cy="50" r="6" fill="url(#discord-grad)" />
      <circle cx="64" cy="50" r="6" fill="url(#discord-grad)" />
      <circle cx="86" cy="50" r="6" fill="url(#discord-grad)" />
      <path d="M 35 65 Q 50 75 64 75 Q 78 75 93 65" stroke="url(#discord-grad)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
