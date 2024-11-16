import { MantineBreakpointsValues, createTheme } from "@mantine/core";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind-config"; 
import { Config } from "tailwindcss";

const twConfig = resolveConfig(tailwindConfig) as Config;
const colors = twConfig.theme?.colors as Record<string, { [key: number]: string }>;


function transformTailwindColors(tailwindColors: Record<string, { [key: number]: string }>) {
  const mantineColors: Record<string, string[]> = {};

  
  Object.keys(tailwindColors).forEach((color) => {
    const colorShades = Object.values(tailwindColors[color]);
    mantineColors[color] = colorShades;
  });

  return mantineColors;
}


export const theme = createTheme({
  colors: transformTailwindColors(colors) as any, 
  breakpoints: twConfig.theme?.screens as MantineBreakpointsValues,
});
