import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, 
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    textAlign: "center",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  container_PRIMARY: {
    backgroundColor: "#538c56",
  },

  container_TERTIARY: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButton;
