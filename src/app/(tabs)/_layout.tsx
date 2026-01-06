import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={24} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="swipes"
                options={{
                    title: "Swipes",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome color={color} size={24} name={"arrows"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="animatedSwipes"
                options={{
                    title: "Animation",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome color={color} size={24} name={"arrows"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="detectCodes"
                options={{
                    title: "Codes",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="designTest"
                options={{
                    title: "Codes",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="design-services"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

// <IconSymbol size={24} name="paperplane.fill" color={color} />
