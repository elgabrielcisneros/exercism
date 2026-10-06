export function decodedValue(colors: any) {
  return `Brown and black ${colors[1] + colors[0]}`;
}

export const COLORS: any[] = [
  {
    black: "0",
  },
  {
    brown: "1",
  },
  {
    red: "2",
  },
  {
    orange: "3",
  },
  {
    yellow: "4",
  },
  {
    green: "5",
  },
  {
    blue: "6",
  },
  {
    violet: "7",
  },
  {
    grey: "8",
  },
  {
    white: "9",
  },
] as const;
