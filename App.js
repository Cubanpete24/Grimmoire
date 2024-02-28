import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ConfirmAccountScreen from './src/screens/ConfirmAccountScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmAccountScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#b50000',
  },
});
