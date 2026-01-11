import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SwipeDetector } from "@/components/SwipeDetector";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ShowOnSwipe } from "@/components/ui/showOnSwipe";
import { useSequence } from "@/hooks/useSequence";
import { Direction, lookupStratByCode } from "@/constants/stratagems";
import { shakeListener } from "@/util/shake";
import { createAudioPlayer } from "expo-audio";

// if (Platform.OS === "ios")
//     Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

export default function TabTwoScreen() {
    const [sequence, append, clear] = useSequence<Direction>({ limit: 8 });

    const swipes = {
        onSwipeLeft() {
            append(Direction.LEFT);
        },
        onSwipeRight() {
            append(Direction.RIGHT);
        },
        onSwipeUp() {
            append(Direction.UP);
        },
        onSwipeDown() {
            append(Direction.DOWN);
        },
        onTap() {
            append(Direction.TAP);
        },
    };

    useEffect(() => {
        const stratagem = lookupStratByCode(sequence);

        if (!stratagem) return;

        console.log(stratagem);
        clear();

        // if (stratagem.icon) {
        //     // Pass
        // }

        if (stratagem.audio) {
            // JS should really get better random functions

            // Note!!!! This doens't work on silence!!!
            stratagem.audio.reduce((prom, audio) => {
                return prom.then(() =>
                    playAudio(audio[Math.floor(Math.random() * audio.length)])
                );
            }, Promise.resolve());
        }
    }, [JSON.stringify(sequence)]);

    // Audio is stupid and only works in async
    async function playAudio(src: number) {
        // Forced to use a different library grrr
        // and it's just more annoying
        const player = createAudioPlayer(src, {});
        player.seekTo(0);
        player.play();

        return new Promise<void>((resolve) => {
            player.addListener("playbackStatusUpdate", (status) => {
                if (status.didJustFinish) {
                    resolve();
                }
            });
        }).finally(() => {
            // Resource cleanup
            player.release();
        });

        // const sound = await Audio.Sound.createAsync(src);
        // await sound.sound.playAsync();
    }

    // Shake detector
    useEffect(
        () =>
            shakeListener(() => {
                console.log("Clearing log");
                clear();
            }),
        [clear]
    );

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
                <View style={[styles.header, { backgroundColor: "#353636" }]}>
                    <IconSymbol
                        size={310}
                        color="#808080"
                        name="chevron.left.forwardslash.chevron.right"
                        style={styles.headerImage}
                    />
                </View>

                <ThemedView style={{ height: "100%" }}>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedText type="title">Code test</ThemedText>
                    </ThemedView>
                    <ThemedText style={{ paddingLeft: 35 }}>
                        Swiping certain codes should do things
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
