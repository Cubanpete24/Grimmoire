import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/genie_icon.png";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton";

const width_proportion = "80%";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const { height } = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
      text="Sign In"
      onPress={onSignInPressed} />

<CustomButton
      text="Forgot Password"
      onPress={onSignInPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  logo: {
    width: width_proportion,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
