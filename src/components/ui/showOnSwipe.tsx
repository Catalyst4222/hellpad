import { usePop } from "@/hooks/usePop";
import { useSwipe } from "@/hooks/useSwipe";
import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";

export function ShowOnSwipe({
    left,
    right,
    up,
    down,
    allDirections,
    enabled = true,
    children,
}: {
    left?: JSX.Element;
    right?: JSX.Element;
    up?: JSX.Element;
    down?: JSX.Element;
    allDirections?: JSX.Element;
    enabled?: boolean;
    children?: React.ReactNode | React.ReactNode[];
}) {
    const swipes = {} as Record<
        keyof Omit<
            Parameters<typeof useSwipe>[0],
            "minDistance" | "maxDeviance"
        >,
        () => void
    >;

    const pops = [];

    if (allDirections) {
        const allPop = usePop(allDirections, {
            afterPopIn() {
                allPop.popOut();
            },
        });
        swipes["onSwipe"] = () => enabled && allPop.popIn();
        pops.push(allPop.popComponent);
    }

    if (left) {
        const leftPop = usePop(left, {
            afterPopIn() {
                leftPop.popOut();
            },
        });
        swipes["onSwipeLeft"] = () => enabled && leftPop.popIn();
        pops.push(leftPop.popComponent);
    }

    if (right) {
        const rightPop = usePop(right, {
            afterPopIn() {
                rightPop.popOut();
            },
        });
        swipes["onSwipeRight"] = () => enabled && rightPop.popIn();
        pops.push(rightPop.popComponent);
    }

    if (up) {
        const upPop = usePop(up, {
            afterPopIn() {
                upPop.popOut();
            },
        });
        swipes["onSwipeUp"] = () => enabled && upPop.popIn();
        pops.push(upPop.popComponent);
    }

    if (down) {
        const downPop = usePop(down, {
            afterPopIn() {
                downPop.popOut();
            },
        });
        swipes["onSwipeDown"] = () => enabled && downPop.popIn();
        pops.push(downPop.popComponent);
    }

    const { onTouchStart, onTouchEnd } = useSwipe(swipes);
    const [elemHeight, setHeight] = useState(0);

    const { height } = useWindowDimensions();

    return (
        <View
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ flex: 1 }}
        >
            {children}
            <View
                style={{
                    position: "absolute",
                    alignItems: "center",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                {pops.map((element, i) => (
                    <View
                        style={{
                            position: "absolute",
                            zIndex: 3,
                            top: height / 2 - elemHeight / 2,
                        }}
                        onLayout={(event) => {
                            setHeight(event.nativeEvent.layout.height);
                        }}
                        key={i}
                    >
                        {element}
                    </View>
                ))}
            </View>
        </View>
    );
}
