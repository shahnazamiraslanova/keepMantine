import { MantineBreakpointsValues, createTheme, MantineColorsTuple } from "@mantine/core";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind-config";

import { Config } from "tailwindcss";

const twConfig = resolveConfig(tailwindConfig) as Config;
const colors = twConfig.theme?.colors as Record<string, { [x: number]: string }>;

// Ensure Tailwind colors map correctly to Mantine's 10-shade requirement
const blueShades = Object.values(colors?.blue || {}).slice(0, 10);

// Check if we have exactly 10 shades; otherwise, fill in with placeholders
const blue = (blueShades.length === 10 ? blueShades : [...blueShades, ...Array(10 - blueShades.length).fill("#000")]) as unknown as MantineColorsTuple;

export const theme = createTheme({
  colors: {
    blue, // Tailwind blue shades mapped to Mantine's required 10-shade tuple
  },
  breakpoints: twConfig.theme?.screens as MantineBreakpointsValues,
});
