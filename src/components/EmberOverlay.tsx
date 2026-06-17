"use client";

type Ember = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

// Deterministic positions — avoids SSR/client hydration mismatch
function createEmbers(count: number): Ember[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: 28 + ((id * 13) % 44),
    top: 18 + ((id * 11) % 45),
    size: 2 + (id % 4),
    delay: (id % 6) * 0.4,
    duration: 3 + (id % 5),
    drift: -30 + ((id * 19) % 60),
  }));
}

const embers = createEmbers(24);

export function EmberOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      <div className="ember-glow absolute left-1/2 top-[28%] h-56 w-56 -translate-x-1/2 rounded-full bg-orange-600/25 blur-[90px]" />
      <div className="ember-glow-slow absolute left-[46%] top-[34%] h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/20 blur-[70px]" />
      <div className="ember-glow absolute left-[54%] top-[30%] h-32 w-32 -translate-x-1/2 rounded-full bg-amber-500/15 blur-[60px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(234,88,12,0.18)_0%,transparent_55%)]" />
      <div className="smoke-drift absolute inset-0 opacity-40" />

      {embers.map((ember) => (
        <span
          key={ember.id}
          className="ember-particle absolute rounded-full"
          style={{
            left: `${ember.left}%`,
            top: `${ember.top}%`,
            width: ember.size,
            height: ember.size,
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
            ["--ember-drift" as string]: `${ember.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
