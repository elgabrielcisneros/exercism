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

export function decodedValue([color1, color2]: Colors[]) {
  return COLORS.indexOf(color1) * 10 + COLORS.indexOf(color2);
}
