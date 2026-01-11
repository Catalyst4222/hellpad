import { SvgProps } from "react-native-svg";
import { Animated, useAnimatedValue } from "react-native";
import { useEffect } from "react";
import React from "react";

export function ShowStratagem({
    stratagem: Stratagem,
    onEnd,
}: {
    stratagem?: React.FC<SvgProps> | JSX.Element;
    onEnd?: () => void;
}) {
    const opacity = useAnimatedValue(0);
    const rotation = useAnimatedValue(0);

    useEffect(() => {
        // fadeIn();

        // return;
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
            // Todo: figure out how to do this
            Animated.timing(rotation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start((finished) => finished && onEnd && onEnd());

        // Cleanup
        return () => {
            opacity.stopAnimation();
            opacity.setValue(0);
            rotation.stopAnimation();
            rotation.setValue(0);
        };
    }, [Stratagem]);

    let element;
    if (Stratagem === undefined) {
        element = undefined;
    } else if (React.isValidElement(Stratagem)) {
        element = Stratagem;
    } else {
        element = <Stratagem />;
    }

    return (
        <Animated.View
            style={{
                opacity: opacity,
                transform: [
                    {
                        rotate: "0deg",
                    },
                ],
            }}
        >
            {/* {Stratagem ? <Stratagem /> : <></>} */}
            {element}
        </Animated.View>
    );
}
