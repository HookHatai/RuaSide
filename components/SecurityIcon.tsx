export function SecurityIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="security-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#0052cc" />
          <stop offset="100%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
      <path
        d="M 64 25 L 40 38 L 40 58 C 40 80 64 95 64 95 C 64 95 88 80 88 58 L 88 38 L 64 25 Z"
        stroke="url(#security-grad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 54 60 L 60 66 L 74 52"
        stroke="url(#security-grad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
