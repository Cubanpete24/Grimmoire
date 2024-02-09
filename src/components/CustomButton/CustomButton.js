import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#538c56",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    AlignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {

  },

  container_TERTIARY: {

  },
  
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomButton;
