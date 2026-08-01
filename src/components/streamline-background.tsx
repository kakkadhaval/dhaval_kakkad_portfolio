"use client";

/**
 * Signature visual element.
 * A field of quiet streamlines suggesting flow around a body —
 * a direct nod to CFD without literal iconography (no arrows, no gauges).
 * Two lines drift with a slow dash animation; the rest stay static and faint.
 */
export function StreamlineBackground() {
  const staticPaths = [
    "M -80 90 C 220 40, 420 40, 620 90 S 1020 140, 1320 90",
    "M -80 140 C 220 100, 420 190, 620 150 S 1020 90, 1320 150",
    "M -80 230 C 220 260, 420 190, 620 240 S 1020 300, 1320 240",
    "M -80 290 C 220 320, 420 260, 620 300 S 1020 350, 1320 300",
    "M -80 360 C 220 330, 420 400, 620 360 S 1020 310, 1320 360",
  ];

  const activePaths = [
    "M -80 190 C 220 150, 420 230, 620 190 S 1020 130, 1320 190",
    "M -80 320 C 220 360, 420 280, 620 330 S 1020 380, 1320 330",
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden noise-mask"
    >
      <svg
        viewBox="0 0 1240 420"
        className="absolute left-1/2 top-1/2 h-[120%] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.16] sm:opacity-[0.22]"
        preserveAspectRatio="xMidYMid slice"
      >
        {staticPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#7B9CD9"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ))}
        {activePaths.map((d, i) => (
          <path
            key={`active-${i}`}
            d={d}
            fill="none"
            stroke="#A9C2EA"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeDasharray="6 10"
            className="animate-flow"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
