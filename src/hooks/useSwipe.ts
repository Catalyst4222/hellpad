import { GestureResponderEvent } from "react-native";

/**
 * Detect the user's swipes
 * @param onSwipeLeft The callback for left swipes
 * @param onSwipeRight The callback for right swipes
 * @param onSwipeUp The callback for up swipes
 * @param onSwipeDown The callback for down swipes
 * @param minDistance How far the swipe must be to be detected
 * @param maxDeviance How far away from the axes the swipe can be, in degrees. Default 30. minDeviance > 45 is undefined behavior
 * @returns The {onTouchStart, onTouchEnd} to pass to the appropriate component
 */
export function useSwipe({
    minDistance = 30,
    maxDeviance = 30,
    onSwipe,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
}: {
    minDistance?: number;
    maxDeviance?: number;
    onSwipe?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onTap?: () => void;
}) {
    let startX = 0,
        startY = 0;

    // set user touch start position
    function onTouchStart(e: GestureResponderEvent) {
        startX = e.nativeEvent.pageX;
        startY = e.nativeEvent.pageY;
    }

    // when touch ends check for swipe directions
    function onTouchEnd(e: GestureResponderEvent) {
        // get touch position and screen size
        const x = e.nativeEvent.pageX - startX;
        const y = e.nativeEvent.pageY - startY;

        // Check if the swipe was far enough
        if (x ** 2 + y ** 2 < minDistance ** 2) {
            if (onTap) onTap();
            return;
        }

        // Convert to degrees, -180..180
        const angle = (-Math.atan2(y, x) * 180) / Math.PI;

        if (onSwipe) onSwipe();

        // Right
        if (angle > 0 - maxDeviance && angle < 0 + maxDeviance) {
            if (onSwipeRight) onSwipeRight();
            return;
        }

        // left
        if (angle > 180 - maxDeviance || angle < -180 + maxDeviance) {
            if (onSwipeLeft) onSwipeLeft();
            return;
        }

        // Up
        if (angle > 90 - maxDeviance && angle < 90 + maxDeviance) {
            if (onSwipeUp) onSwipeUp();
            return;
        }

        // Down
        if (angle > -90 - maxDeviance && angle < -90 + maxDeviance) {
            if (onSwipeDown) onSwipeDown();
            return;
        }
    }

    return { onTouchStart, onTouchEnd };
}
