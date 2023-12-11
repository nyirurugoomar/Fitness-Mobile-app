import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";

function _layout() {
  LogBox.ignoreLogs(["Warning:failed prop type"]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

export default _layout;
