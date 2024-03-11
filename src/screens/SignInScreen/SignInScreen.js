import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/genie_icon.png";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";


const width_proportion = "80%";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up pressed");
  };

  const onForgotPressed = () => {
    console.warn("Forgot password pressed");
  };

  const onSignInApple = () => {
    console.warn("Sign in with Apple");
  };

  const onSignInGoogle = () => {
    console.warn("Sign in with Google");
  };

  const { height } = useWindowDimensions();

  return (
    <ScrollView>
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
      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton
        text="Forgot Password"
        onPress={onForgotPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />

  <Link href="/Register" asChild>
      <CustomButton
        text="Create an account"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
      </Link>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width_proportion,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
