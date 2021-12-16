import { DripsyProvider, makeTheme, Text, View } from "dripsy";
import React from "react";

const theme = makeTheme({});

export default function ThemeProvider({ children }) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}

export { Text, View };
