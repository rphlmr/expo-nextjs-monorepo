import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import makeStyles from "@me/app-ui/style";
import ThemeProvider from "@me/app-ui/theme";
import { SimpleButton } from "@me/app-ui/components";
import { View, Text, H1 } from "dripsy";

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
        <Text sx={{ marginBottom: 50 }}>I'm a monorep demo app 🚀 !</Text>
        <SimpleButton
          label="Switch background color"
          onPress={() => {
            if (isActive) {
              setIsActive(false);
            } else {
              setIsActive(true);
            }
          }}
        />

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
