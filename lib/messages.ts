const OPENINGS = [
  "Rosa, my own blood,",
  "My beloved Rosa,",
  "To my Rosa,",
  "Rosa,",
];

const LINES = [
  "my love for you lives quietly and forever.",
  "you are always carried in my heart.",
  "no distance can weaken what binds us.",
  "you are never alone, even in silence.",
  "my care for you is steady and unbreakable.",
];

export function generateMessage(): string {
  const opening = OPENINGS[Math.floor(Math.random() * OPENINGS.length)];
  const line = LINES[Math.floor(Math.random() * LINES.length)];

  return `${opening}\n\n${line}\n\n— Papa`;
}
