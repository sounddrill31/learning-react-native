import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#333",
          tabBarActiveTintColor: "teal",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "HomePage",
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
