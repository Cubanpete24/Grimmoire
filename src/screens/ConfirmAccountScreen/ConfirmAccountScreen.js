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
  import CustomText from "../../components/CustomText";
  import * as Haptics from 'expo-haptics';

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };


  
  const width_proportion = "80%";
  
  const ConfirmAccount = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [email, setEmail] = useState("");

  
  
    const onConfirmedPressed = () => {
      console.warn("Create pressed");
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )
    };

  
    const { height } = useWindowDimensions();
  
    return (
      <ScrollView>
      <View style={styles.root}>
        <CustomText 
        type="H1" 
        text="Confirm account"   
        />
        <CustomInput
          placeholder="email"
          placeholderTextColor="blue"
          value={username}
          setValue={setUsername}
          type="Register"
        />
        <CustomInput
          placeholder="code"
          value={username}
          setValue={setUsername}
          type="Register"
        />

        <CustomButton text="Confirm" onPress={onConfirmedPressed} />
  

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
    header: {

    }
  });
  
  export default ConfirmAccount;
  