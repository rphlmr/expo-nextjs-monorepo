import { DripsyProvider, makeTheme } from "dripsy";
import React from "react";

const theme = makeTheme({});

export default function ThemeProvider({ children }) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
