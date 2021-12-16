import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import makeStyles from "@me/app-ui/style";
import ThemeProvider from "@me/app-ui/theme";
import { View, H1, Text } from "dripsy";

const useStyles = makeStyles(({ isActive, theme }) => ({
  container: {
    flex: 1,
    backgroundColor: isActive ? theme.colors.primary : theme.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function App() {
  const theme = {
    colors: {
      primary: "#f1f1f1",
      secondary: "#8bd36e",
    },
  };
  const [isActive, setIsActive] = useState(false);

  // StyleSheet helper demo. You can pass props to make style react to props !
  const styles = useStyles({ isActive, theme });

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <H1>Hello Sir</H1>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableOpacity
          onPress={() => {
            if (isActive) {
              setIsActive(false);
            } else {
              setIsActive(true);
            }
          }}
        >
          <Text>Change colors</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
