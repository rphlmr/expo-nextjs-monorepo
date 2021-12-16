import { upperCase } from "lodash/string";
import React from "react";

/**
 * Use lodash to demonstrate that a "local" package can have their own dependencies
 */
export const UpperText = ({ children }) => (
  <span style={{ fontWeight: "bold" }}>{upperCase(children)}</span>
);
