import { Accelerometer } from "expo-sensors";

Accelerometer.setUpdateInterval(100);

export function shakeListener(
    callback: (acceleration: number) => void,
    sensitivity: number = 1.8
) {
    return Accelerometer.addListener(({ x, y, z }) => {
        const acceleration = Math.sqrt(x * x + y * y + z * z);

        // Adjust sensibility, because it can depend of usage (& devices)

        if (acceleration >= sensitivity) {
            callback(acceleration);
        }
    }).remove;
}
