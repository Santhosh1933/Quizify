import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { AuthState } from "../hooks/atoms/AuthState";
import { Redirect, router } from "expo-router";

export default function HomePage() {
  const [authState, setAuthState] = useRecoilState(AuthState);
  if (!authState) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text className="text-4xl">HomePage</Text>
    </View>
  );
}
