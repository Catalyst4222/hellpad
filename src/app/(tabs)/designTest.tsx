import { View, useWindowDimensions, Image, Platform } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { createAudioPlayer, setAudioModeAsync } from "expo-audio";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SvgProps } from "react-native-svg";

import { Landscape } from "@/components/Fullscreen";
import { onScreenLoad } from "@/hooks/onScreenLoad";
import { shakeListener } from "@/util/shake";
import { useSequence } from "@/hooks/useSequence";
import { Direction, lookupStratByCode } from "@/constants/stratagems";
import { SwipeDetector } from "@/components/SwipeDetector";
import { ShowOnSwipe } from "@/components/ui/showOnSwipe";
import { ShowStratagem } from "@/components/ui/showStratagem";

if (Platform.OS === "ios") {
    setAudioModeAsync({
        playsInSilentMode: true,
    });
}

export default function DesignTest() {
    const navigation = useNavigation();
    const [sequence, append, clear] = useSequence<Direction>({ limit: 10 });
    const { width, height: screenHeight } = useWindowDimensions();
    const [stratagemImage, setStratagemImage] = useState<React.FC<SvgProps>>();
    const [locked, setLocked] = useState(false);

    // Rotate and lock the screen
    onScreenLoad("(tabs)/designTest", () => {
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        );
        return () =>
            ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
    });

    // Hide the tab bar at the bottom
    onScreenLoad(
        "(tabs)/designTest",
        () => {
            navigation.setOptions({
                tabBarStyle: {
                    display: "none",
                },
            });
            return () => {
                navigation.getParent()?.setOptions({
                    tabBarStyle: {
                        display: "flex",
                    },
                });
            };
        },
        []
    );

    /** Arrow stuff */

    function appendFiltered(value: Direction) {
        if (!locked) {
            console.log(value);
            append(value);
        }
    }

    const swipes = {
        onSwipeLeft() {
            appendFiltered(Direction.LEFT);
        },
        onSwipeRight() {
            appendFiltered(Direction.RIGHT);
        },
        onSwipeUp() {
            appendFiltered(Direction.UP);
        },
        onSwipeDown() {
            appendFiltered(Direction.DOWN);
        },
        onTap() {
            clear();
        },
    };

    // What actually plays the codes
    useEffect(() => {
        const stratagem = lookupStratByCode(sequence);

        if (!stratagem) {
            if (sequence.length == 0 && stratagemImage !== undefined) {
                // something here idk
            } else {
                setStratagemImage(undefined);
            }

            return;
        }

        // console.log(stratagem);
        clear();
        setLocked(true);

        if (stratagem.audio) {
            // JS should really get better random functions

            const startingPromise = Promise.resolve(
                console.log("Starting playing audio")
            );

            stratagem.audio
                .reduce((prom, audio) => {
                    return prom.then(() =>
                        playAudio(
                            audio[Math.floor(Math.random() * audio.length)]
                        )
                    );
                }, startingPromise)
                .then(() => console.log("Done playing audio"));
        }

        if (stratagem.icon) {
            setStratagemImage(stratagem.icon);
        } else {
            console.log("No stratagem icon! Code may not unlock!");
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
        <Landscape
            onExit={() => {
                router.navigate("/");
            }}
        >
            <SwipeDetector {...swipes}>
                <ShowOnSwipe
                    enabled={!locked}
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
                    <Image
                        style={{
                            width: width * 0.95,
                            height: width * 0.105,
                            margin: "auto",
                            marginTop: screenHeight * 0.025,
                            resizeMode: "contain",
                        }}
                        source={require("../../assets/images/Helldivers-2-Logo.png")}
                    />
                    <View style={{ flex: 1 }}>
                        <ShowStratagem
                            stratagem={stratagemImage}
                            onEnd={() => {
                                // clear();
                                setLocked(false);
                            }}
                        />
                    </View>
                    <Image
                        style={{
                            width: width * 0.95,
                            height: width * 0.09,
                            bottom: 0,
                            margin: "auto",
                            resizeMode: "contain",
                        }}
                        source={require("../../assets/images/bars.png")}
                    />
                </ShowOnSwipe>
            </SwipeDetector>
        </Landscape>
    );
}
