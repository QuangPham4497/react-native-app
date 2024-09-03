import React from "react";

import { DrawerBarIcon } from "@/components/navigation/DrawerBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import AppHeader from "@/components/navigation/app.header";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="home"
        screenOptions={{
          // headerShown: false,
          drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Drawer.Screen
          name="(home)"
          options={{
            drawerLabel: "Home",
            title: "Home Page",
            drawerIcon: ({ color, focused }) => (
              <DrawerBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
            header: () => <AppHeader />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Setting Page",
            drawerIcon: ({ color, focused }) => (
              <DrawerBarIcon
                name={focused ? "planet" : "planet-outline"}
                color={color}
              />
            ),
            header: () => <AppHeader />,
          }}
        />
        <Drawer.Screen
          name="credit"
          options={{
            drawerLabel: "Credit",
            title: "Setting Page",
            drawerIcon: ({ color, focused }) => (
              <DrawerBarIcon
                name={focused ? "settings" : "settings-outline"}
                color={color}
              />
            ),
            header: () => <AppHeader />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
