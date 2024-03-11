import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({value, setValue, placeholder, secureTextEntry, type = "PRIMARY",}) => {
  return (
    <View style={[styles.container, 
      styles[`container_${type}`],
    ]}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={[
        styles.textInput,
        styles[`text_${type}`],
      ]}
      secureTextEntry={secureTextEntry } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5D7E3",
    AlignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '7%',
    borderColor:'#858383',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  
  textInput: {
    color: 'black',
  },

  container_Register: {
    height: '14%',
  },
  input_Register: {
    textAlign: 'center',
  },
});

export default CustomInput;
