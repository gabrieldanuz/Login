import React from "react";
import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { loginStyle } from "./login.style";

export const LoginScreen = () => {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View>
      <Card>
        <Card.Title title= "Delivery App"></Card.Title>
        <Card.Content>
          <TextInput label="Email" keyboardType="email-address"></TextInput>
          <TextInput label="Password" secureTextEntry={true}></TextInput>
          <Button uppercase={false}>Forgot Email/Password</Button>
          <Button mode="contained">Login</Button>
          <Button>Register</Button>
        </Card.Content>
      </Card>
      </View>
    </SafeAreaView>
  )
}