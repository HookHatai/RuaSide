export function UnlimitedIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="unlimited-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#0052cc" />
          <stop offset="100%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
      <path
        d="M 35 64 C 35 55 42 48 52 48 C 58 48 63 51 65 56 C 67 51 72 48 78 48 C 88 48 95 55 95 64 C 95 73 88 80 78 80 C 72 80 67 77 65 72 C 63 77 58 80 52 80 C 42 80 35 73 35 64 Z"
        stroke="url(#unlimited-grad)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="52" cy="64" r="5" fill="url(#unlimited-grad)" opacity="0.5" />
      <circle cx="78" cy="64" r="5" fill="url(#unlimited-grad)" opacity="0.5" />
    </svg>
  );
}
