import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from '../src/screens/SignInScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import ConfirmAccountScreen from '../src/screens/ConfirmAccountScreen';


export default function Page() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
}
// #650D1B -> Chocolate Cosmos
// #2C363F -> Gunmetal
// #499167 -> Sea Green
// #5FDD9D -> Emerald

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#650D1B',
  },
});
