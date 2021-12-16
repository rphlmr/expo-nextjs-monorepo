import React from "react";
import { Text, Pressable } from "dripsy";

export const SimpleButton = ({ onPress, label }) => (
  <Pressable
    sx={{ backgroundColor: "#2d2d2d", padding: 10, borderRadius: 6 }}
    onPress={onPress}
  >
    <Text sx={{ color: "white" }}>{label}</Text>
  </Pressable>
);
