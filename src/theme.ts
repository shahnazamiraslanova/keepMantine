import { MantineBreakpointsValues, createTheme } from "@mantine/core";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind-config";
import { Config } from "tailwindcss";
// import values from "lodash/values";

const twConfig = resolveConfig(tailwindConfig) as Config;
const colors = twConfig.theme?.colors as Record<
  string,
  { [x: number]: string }
>;

export const theme = createTheme({
  colors: {
    //TODO: must be as MantineColorsTuple from @mantine/core
    blue: Object.values(colors?.blue) as any,
  },
  breakpoints: twConfig.theme?.screens as MantineBreakpointsValues,
});
