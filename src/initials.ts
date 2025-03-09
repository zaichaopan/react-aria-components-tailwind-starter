const tokens = [
  'oklch(0.552 0.016 285.938)',
  'oklch(0.65 0.13 233.58)',
  'oklch(0.42 0.12 253.27)',
  'oklch(0.442 0.017 285.786)',
  'oklch(0.37 0.013 285.805)',
  'oklch(0.527 0.154 150.069)',
  'oklch(0.45 0.11 151.32)',
  'oklch(0.592 0.249 0.584)',
  'oklch(0.459 0.187 3.815)',
  'oklch(0.609 0.126 221.723)',
  'oklch(0.52 0.105 223.128)',
  'oklch(0.681 0.162 75.834)',
  'oklch(0.476 0.114 61.907)',
  'oklch(0.48 0.18 321.36)',
  'oklch(0.401 0.17 325.612)',
  'oklch(0.46 0.17 3.82)',
  'oklch(0.41 0.159 10.272)',
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

export function getInitialsToken(name: string, colorful: boolean) {
  if (colorful) {
    const i = sumChars(name) % tokens.length;
    return tokens[i];
  }

  return tokens[0];
}

export function getFallbackAvatarDataUrl({
  fallback,
  alt,
  colorful = false,
}: {
  fallback: 'initials' | 'icon';
  alt: string;
  colorful?: boolean;
}) {
  const initials = getInitials(alt);
  const token = getInitialsToken(alt, colorful);

  return fallback === 'icon'
    ? getFallbackIconDateUrl(token)
    : getFallbackInitialsDataUrl(token, initials);
}

function getFallbackIconDateUrl(token: string) {
  return (
    'data:image/svg+xml;base64,' +
    btoa(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 80 80" style="background:${token};color:oklch(0.985 0 0);"><g><path d="M 8 80 a 28 24 0 0 1 64 0"/><circle cx="40" cy="32" r="16"/></g></svg>`,
    )
  );
}

function getFallbackInitialsDataUrl(token: string, initials: string) {
  return (
    'data:image/svg+xml;base64,' +
    btoa(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="background:${token};color:oklch(0.985 0 0);font-family:system-ui;"><text x="50%" y="50%" alignment-baseline="middle" dominant-baseline="middle" text-anchor="middle" dy=".125em" font-size="65%">${initials}</text></svg>`,
    )
  );
}
