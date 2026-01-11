import { StyleSheet } from "react-native";
import * as React from "react";
import Animated from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SwipeDetector } from "@/components/SwipeDetector";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ShowOnSwipe } from "@/components/ui/showOnSwipe";

export default function TabTwoScreen() {
    const swipes = {
        onSwipeLeft() {
            console.log("LEFT");
        },
        onSwipeRight() {
            console.log("RIGHT");
        },
        onSwipeUp() {
            console.log("UP");
        },
        onSwipeDown() {
            console.log("DOWN");
        },
        onTap() {
            console.log("TAP");
        },
    };

    return (
        <SwipeDetector {...swipes}>
            <ShowOnSwipe
                right={
                    <MaterialCommunityIcons
                        name="arrow-right-bold"
                        size={300}
                        color="white"
                    />
                }
                up={
                    <MaterialCommunityIcons
                        name="arrow-up-bold"
                        size={300}
                        color="white"
                    />
                }
                left={
                    <MaterialCommunityIcons
                        name="arrow-left-bold"
                        size={300}
                        color="white"
                    />
                }
                down={
                    <MaterialCommunityIcons
                        name="arrow-down-bold"
                        size={300}
                        color="white"
                    />
                }
            >
                <Animated.View
                    style={[styles.header, { backgroundColor: "#353636" }]}
                >
                    <IconSymbol
                        size={310}
                        color="#808080"
                        name="chevron.left.forwardslash.chevron.right"
                        style={styles.headerImage}
                    />
                </Animated.View>

                <ThemedView style={{ height: "100%" }}>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedText type="title">Animation test</ThemedText>
                    </ThemedView>
                    <ThemedText style={{ paddingLeft: 35 }}>
                        Swipe the screen see the arrow code
                    </ThemedText>
                </ThemedView>
            </ShowOnSwipe>
        </SwipeDetector>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
        padding: "5%",
    },
    header: {
        height: 150,
        overflow: "hidden",
    },
});
