const tokens = [
  'zinc',
  'gray',
  'red',
  'orange',
  'amber',
  'yellow',
  'brown',
  'auburn',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export function getDefaultInitials(name: string) {
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

export function getRandomToken(name: string, colorless: boolean) {
  if (colorless) {
    return tokens[0];
  }

  const i = sumChars(name) % tokens.length;
  return tokens[i];
}

function drawOverlayIcon({
  text,
  size,
  background,
  foreground,
}: {
  text: string;
  size: number;
  background: string;
  foreground: string;
}): HTMLCanvasElement | null {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    return null;
  }

  // draw Square
  const scale = window.devicePixelRatio;
  canvas.setAttribute('width', String(Math.floor(size * scale)));
  canvas.setAttribute('height', String(Math.floor(size * scale)));
  context.scale(scale, scale);

  context.fillStyle = background;
  context.beginPath();
  context.rect(0, 0, size, size);
  context.fill();

  // text
  context.fillStyle = foreground;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = `500 ${size * 0.38}px "`;
  context.fillText(text, size / 2, size / 2, size);

  return canvas;
}

export function generateInitialAvatarDataUrl(alt: string, colorless: boolean) {
  const initials = getDefaultInitials(alt);

  const token = getRandomToken(alt, colorless);

  const element =
    document.querySelector('.light') || document.querySelector('.dark');

  let background = '#27272a';
  let foreground = 'white';

  if (element) {
    foreground = getComputedStyle(element).getPropertyValue(`--${token}`);
    background = getComputedStyle(element).getPropertyValue(`--${token}`);
  }

  const canvas = drawOverlayIcon({
    background,
    foreground,
    text: initials,
    size: 400,
  });

  return canvas?.toDataURL() ?? '';
}
