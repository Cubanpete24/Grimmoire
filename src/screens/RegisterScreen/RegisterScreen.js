import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/genie_icon.png";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { Link } from "expo-router";

import * as Haptics from "expo-haptics";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const width_proportion = "80%";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [email, setEmail] = useState("");

  const onCreateAccountPressed = () => {
    console.warn("Create pressed");
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={styles.root}>
        <CustomText type="H1" text="Sign Up" />
        <CustomInput
          placeholder="Handle"
          placeholderTextColor="blue"
          value={username}
          setValue={setUsername}
          type="Register"
        />
        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
          type="Register"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          type="Register"
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          secureTextEntry={true}
          type="Register"
        />
        <CustomButton text="Create" onPress={onCreateAccountPressed} />
        <Link href="/SignIn" asChild>
          <CustomButton text="Back" type="TERTIARY" />
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
  header: {},
});

export default RegisterScreen;
