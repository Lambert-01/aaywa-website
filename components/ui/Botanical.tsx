type SprigProps = {
  className?: string;
};

export function Sprig({ className }: SprigProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M100 190 C 96 150 96 120 100 96"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 118 C 74 122 58 138 52 160 C 78 156 94 140 100 118 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 148 C 126 144 142 128 148 106 C 122 110 106 126 100 148 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 92 C 88 96 76 104 52 104 C 60 82 78 68 98 84 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 96 C 112 88 124 82 148 84 C 140 62 122 52 100 68 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 74 C 96 60 96 48 100 34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SprigBranch({ className }: SprigProps) {
  return (
    <svg
      viewBox="0 0 300 90"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M14 70 C 90 66 180 52 286 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[
        [70, 56, 30],
        [110, 46, 40],
        [150, 38, 58],
        [200, 28, 46],
        [246, 20, 62],
      ].map(([x, y, l]) => (
        <g key={`${x}${y}`}>
          <path
            d={`M${x} ${y} C ${x - 14} ${y - 14} ${x - 26} ${y - 18} ${x - l / 2} ${y - 22}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={`M${x} ${y} C ${x + 12} ${y - 16} ${x + 22} ${y - 20} ${x + l / 2 - 10} ${y - 22}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}