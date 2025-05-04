import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, useColorScheme } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.navBackground },
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          tabBarActiveTintColor: "teal",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Welcome to My App",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-1-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About App",
            // tabBarBadge: 2, shows 2 unreads in About page
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-2-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </React.Fragment>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
