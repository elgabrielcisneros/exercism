export const colorCode = (color: string) => {
  return COLORS.indexOf(color as (typeof COLORS)[number]);
};

export const COLORS: string[] = [
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
