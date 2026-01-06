import { PropsWithChildren } from "react";
import {
    Animated,
    Easing,
    useAnimatedValue,
    useWindowDimensions,
    View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export function Landscape({
    children,
    onExit,
}: PropsWithChildren<{ onExit: () => void }>) {
    const { height, width } = useWindowDimensions();
    const scale = useAnimatedValue(1);

    const exitGesture = Gesture.LongPress()
        .numberOfPointers(2)
        .onStart(() => {
            // Slightly zoom out the window to show we're ready to exit
            Animated.timing(scale, {
                toValue: 0.8,
                duration: 500,
                easing: Easing.bounce, // TODO check these
                useNativeDriver: true,
            }).start();
        })
        .onEnd(() => {
            // Reset the scale without it being jarring
            Animated.timing(scale, {
                toValue: 1,
                duration: 150,
                easing: Easing.linear, // TODO check these
                useNativeDriver: true,
            }).start(onExit);
        })
        .runOnJS(true);

    return (
        <GestureDetector gesture={exitGesture}>
            <View
                style={{
                    zIndex: 1,
                    backgroundColor: "black",
                    height: height,
                    width: width,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
            >
                <Animated.View
                    style={{
                        backgroundColor: "#222222",
                        height: height,
                        width: width,
                        top: 0,
                        transform: [
                            {
                                scale: scale,
                            },
                        ],
                    }}
                >
                    {children}
                </Animated.View>
            </View>
        </GestureDetector>
    );
}
