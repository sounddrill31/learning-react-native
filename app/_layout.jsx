import { Stack } from "expo-router";
import { StyleSheet, View, Text, Image } from "react-native";
const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen name="index" options={{ title: "HomePage" }} />
      <Stack.Screen name="about" options={{ title: "About App" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
