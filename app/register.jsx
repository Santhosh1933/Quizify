import { View, Text } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { AuthState } from "../hooks/atoms/AuthState";
import { Redirect } from "expo-router";

export default function register() {
  const [authState, setAuthState] = useRecoilState(AuthState);

  if (authState) {
    return <Redirect href="/" />;
  }
  return (
    <View>
      <Text>register</Text>
    </View>
  );
}
