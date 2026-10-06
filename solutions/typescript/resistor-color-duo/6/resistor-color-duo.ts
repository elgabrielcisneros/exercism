export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

export type Colors = (typeof COLORS)[number];

export function decodedValue(colors: any) {
  return `Brown and black ${colors[1] + colors[0]}`;
}
