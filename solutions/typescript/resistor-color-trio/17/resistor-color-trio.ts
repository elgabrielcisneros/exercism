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
  [1_000_000_000, "giga"],
  [1_000_000, "mega"],
  [1_000, "kilo"],
] as const;

export function decodedResistorValue([
  color1,
  color2,
  color3,
]: Colors[]): string {
  let num =
    COLORS.indexOf(color1) * 10 +
    COLORS.indexOf(color2) * 10 ** COLORS.indexOf(color3);

  const [divisor, prefix] = values.find(([divisor]) => num >= divisor) ?? [
    1,
    "",
  ];

  return `${num / divisor} ${prefix}ohms`;
}
