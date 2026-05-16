export function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="db-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#0052cc" />
          <stop offset="100%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="35" rx="32" ry="12" stroke="url(#db-grad)" strokeWidth="2" fill="none" />
      <rect x="32" y="35" width="64" height="50" stroke="url(#db-grad)" strokeWidth="2" fill="none" />
      <ellipse cx="64" cy="85" rx="32" ry="12" stroke="url(#db-grad)" strokeWidth="2" fill="none" />
      <line x1="32" y1="50" x2="32" y2="70" stroke="url(#db-grad)" strokeWidth="2" />
      <line x1="96" y1="50" x2="96" y2="70" stroke="url(#db-grad)" strokeWidth="2" />
      <circle cx="50" cy="60" r="3" fill="url(#db-grad)" />
      <circle cx="64" cy="60" r="3" fill="url(#db-grad)" />
      <circle cx="78" cy="60" r="3" fill="url(#db-grad)" />
    </svg>
  );
}
