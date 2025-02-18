const tokens = [
  'oklch(0.274 0.006 286.033)',
  'oklch(0.39 0.01 0)',
  'oklch(0.44 0.16 26.9)',
  'oklch(0.47 0.14 37.3)',
  'oklch(0.47 0.12 46.2)',
  'oklch(0.48 0.1 61.9)',
  'oklch(0.39 0.04 69.71)',
  'oklch(0.39 0.05 23.2)',
  'oklch(0.45 0.11 130.92)',
  'oklch(0.45 0.11 151.32)',
  'oklch(0.43 0.09 166.91)',
  'oklch(0.44 0.07 188.21)',
  'oklch(0.45 0.08 224.29)',
  'oklch(0.44 0.1 240.8)',
  'oklch(0.42 0.18 265.64)',
  'oklch(0.4 0.18 277.37)',
  'oklch(0.43 0.21 292.76)',
  'oklch(0.44 0.2 303.73)',
  'oklch(0.45 0.19 324.6)',
  'oklch(0.46 0.17 3.82)',
  'oklch(0.45 0.17 13.7)',
];

export function getInitials(name: string) {
  return name
    .split(/\s/)
    .map((part) => part.substring(0, 1))
    .filter((v) => !!v)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function sumChars(str: string) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

export function getInitialsToken(name: string, colorless: boolean) {
  if (colorless) {
    return tokens[0];
  }

  const i = sumChars(name) % tokens.length;
  return tokens[i];
}
