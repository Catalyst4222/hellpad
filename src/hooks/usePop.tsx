import { Animated, useAnimatedValue } from "react-native";

export function usePop(
    component: JSX.Element,
    {
        afterPopIn,
        afterPopOut,
    }: { afterPopIn?: () => void; afterPopOut?: () => void } = {}
) {
    const popAnim = useAnimatedValue(0);

    const popIn = () => {
        // Will change popAnim value to 1 in .05 seconds
        Animated.timing(popAnim, {
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
        }).start(afterPopIn);
    };

    const popOut = () => {
        // Will change popAnim value to 0 in .15 seconds
        Animated.timing(popAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(afterPopOut);
    };

    const popComponent = (
        <Animated.View
            style={[
                {
                    opacity: popAnim,
                },
            ]}
        >
            {component}
        </Animated.View>
    );

    return { popIn, popOut, popComponent };
}
