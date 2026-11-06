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

const values = [
  [1_000, "kilohms"],
  [1_000_000, "megaohms"],
  [1_000_000_000, "gigaohms"],
] as const;

export function decodedResistorValue([color1, color2, color3]: Colors[]) {
  color3;

  return (
    COLORS.indexOf(color1) * 10 +
    COLORS.indexOf(color2) +
    COLORS.indexOf(color3)
  );
}
