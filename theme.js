import { extendTheme } from "@chakra-ui/react";
import { Roboto, Open_Sans } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});
const theme = extendTheme({
  fonts: {
    heading: roboto.className.fonts,
    body: openSans.className.fonts,
  },
  colors: {
    primary: {
      50: "#fdf7df",
      100: "#faeaaf",
      200: "#f6dc7b",
      300: "#f3cf44",
      400: "#f1c40e",
      500: "#f0ba00",
      600: "#f0ac00",
      700: "#f19900",
      800: "#f28800",
      900: "#f26800",
    },
    secondary: {
      50: "#efeeff",
      100: "#d3daf3",
      200: "#bbc1de",
      300: "#a2a8ca",
      400: "#8e94b9",
      500: "#7a82a9",
      600: "#6a7397",
      700: "#585f7f",
      800: "#474d69",
      900: "#333850",
    },
    tertiary: {
      50: "#d7fdf1",
      100: "#99f7db",
      200: "#0ef1c4",
      300: "#00e8ac",
      400: "#00de9b",
      500: "#00d488",
      600: "#00c37c",
      700: "#00af6c",
      800: "#009d5e",
      900: "#007c45",
    },
  },
});

export default theme;
