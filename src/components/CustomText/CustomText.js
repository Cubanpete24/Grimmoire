import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomText = ({
  text,
  type = "PRIMARY",
  fgColor,
}) => {
  return (
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
  );
};

const styles = StyleSheet.create({
  container: {
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },


  text_H1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 36,
    marginBottom: 30,
    marginTop: 30,

  },

});

export default CustomText;
