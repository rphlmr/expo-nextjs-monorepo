import { upperCase } from "lodash/string";

/**
 * Use lodash to demonstrate that a "local" package can have their own dependencies
 */
export const greeting = `${upperCase("Hello")} My World !`;
