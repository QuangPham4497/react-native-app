import { Tabs, Stack } from "expo-router";
import { View } from "react-native";

export default function DetailLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
