const tokens = [
  '[--avatar-token:oklch(0.21_0.01_0)] dark:[--avatar-token:oklch(0.37_0.01_285.89)]',
  '[--avatar-token:oklch(0.39_0.01_0)] dark:[--avatar-token:oklch(0.5_0.02_253.51)]',
  '[--avatar-token:oklch(0.44_0.16_26.9)] dark:[--avatar-token:oklch(0.58_0.22_27.33)]',
  '[--avatar-token:oklch(0.47_0.14_37.3)] dark:[--avatar-token:oklch(0.65_0.19_41.11)]',
  '[--avatar-token:oklch(0.47_0.12_46.2)] dark:[--avatar-token:oklch(0.67_0.16_58.31)]',
  '[--avatar-token:oklch(0.48_0.1_61.9)] dark:[--avatar-token:oklch(0.68_0.13_70.11)]',
  '[--avatar-token:oklch(0.39_0.04_69.71)] dark:[--avatar-token:oklch(0.5_0.05_69.71)]',
  '[--avatar-token:oklch(0.39_0.05_23.2)] dark:[--avatar-token:oklch(0.5_0.06_23.2)]',
  '[--avatar-token:oklch(0.45_0.11_130.92)] dark:[--avatar-token:oklch(0.6_0.13_130.92)]',
  '[--avatar-token:oklch(0.45_0.11_151.32)] dark:[--avatar-token:oklch(0.6_0.13_151.32)]',
  '[--avatar-token:oklch(0.43_0.09_166.91)] dark:[--avatar-token:oklch(0.57_0.11_166.91)]',
  '[--avatar-token:oklch(0.44_0.07_188.21)] dark:[--avatar-token:oklch(0.58_0.09_188.21)]',
  '[--avatar-token:oklch(0.45_0.08_224.29)] dark:[--avatar-token:oklch(0.6_0.1_224.29)]',
  '[--avatar-token:oklch(0.44_0.1_240.8)] dark:[--avatar-token:oklch(0.58_0.13_240.8)]',
  '[--avatar-token:oklch(0.42_0.18_265.64)] dark:[--avatar-token:oklch(0.55_0.23_265.64)]',
  '[--avatar-token:oklch(0.4_0.18_277.37)] dark:[--avatar-token:oklch(0.53_0.23_277.37)]',
  '[--avatar-token:oklch(0.43_0.21_292.76)] dark:[--avatar-token:oklch(0.57_0.27_292.76)]',
  '[--avatar-token:oklch(0.44_0.2_303.73)] dark:[--avatar-token:oklch(0.58_0.26_303.73)]',
  '[--avatar-token:oklch(0.45_0.19_324.6)] dark:[--avatar-token:oklch(0.6_0.24_324.6)]',
  '[--avatar-token:oklch(0.46_0.17_3.82)] dark:[--avatar-token:oklch(0.61_0.22_3.82)]',
  '[--avatar-token:oklch(0.45_0.17_13.7)] dark:[--avatar-token:oklch(0.6_0.22_13.7)]',
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
