import { StyleSheet } from "react-native";

/**
 * Simple helper if you only want to use StyleSheet in your expo project
 *
 * @example
 * const useStyles = makeStyles(({ isActive, theme }) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: isActive ? theme.colors.primary : theme.colors.secondary,
 *     alignItems: "center",
 *     justifyContent: "center",
 *   },
 * }));
 *
 * const styles = useStyles({ isActive, theme });
 */
const makeStyles = (styleFn) => {
  return (props = {}) => {
    return StyleSheet.create(styleFn(props));
  };
};

export default makeStyles;
