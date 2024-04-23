import { View, Text } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { AuthState } from "../hooks/atoms/AuthState";
import { Redirect } from "expo-router";

export default function login() {
  const [authState, setAuthState] = useRecoilState(AuthState);

  if (authState) {
    return <Redirect href="/" />;
  }

  return (
    <View>
      <Text>login</Text>
    </View>
  );
}
