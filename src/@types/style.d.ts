// Extends type for themes. With this typescript can hel in development;

// import "styled-components";
// import { darkTheme } from "../styles/themes/dark";
// import { lightTheme } from "../styles/themes/light";
// import { Merge } from "ts-essentials";

// type ThemeTypeDark = typeof darkTheme;
// type ThemeTypeLight = typeof lightTheme;

// declare module "styled-components" {
//   export interface DefaultTheme extends Merge<ThemeTypeDark, ThemeTypeLight> {}
// }

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryFont: string;
    secundaryFont: string;

    headerBackground: string;
    bodyBackground: string;

    taskBackground: string;

    buttonText: string;

    purple: string;
    purpleDark: string;
    blue: string;
    blueDark: string;
    danger: string;
  }
}
