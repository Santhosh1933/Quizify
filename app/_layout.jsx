import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";
import { Feather } from "@expo/vector-icons";

export default function _layout() {
  return (
    <RecoilRoot>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerRight: () => (
              <Feather name="settings" size={22} color="white" />
            ),
            headerTitle: "App Name",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#c026d3",
            
            },
          }}
        />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </RecoilRoot>
  );
}
