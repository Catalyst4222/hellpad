import { useSwipe } from "@/hooks/useSwipe";
import { View } from "react-native";

export function SwipeDetector({
    minDistance = 30,
    maxDeviance = 30,
    onSwipe,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    children,
}: {
    minDistance?: number;
    maxDeviance?: number;
    onSwipe?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onTap?: () => void;
    children?: React.ReactNode | React.ReactNode[];
}) {
    const { onTouchStart, onTouchEnd } = useSwipe({
        minDistance,
        maxDeviance,
        onSwipe,
        onSwipeLeft,
        onSwipeRight,
        onSwipeUp,
        onSwipeDown,
        onTap,
    });

    return (
        <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{flex: 1}}>
            {children}
        </View>
    );
}
