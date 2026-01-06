import { useSegments } from "expo-router";
import { useEffect } from "react";

export function onScreenLoad(
    path: string,
    callback: () => void | (() => void),
    dependencies: readonly unknown[] = []
) {
    const currentPath = useSegments().join("/");

    useEffect(() => {
        let cleanup: void | (() => void);
        if (currentPath == path) {
            cleanup = callback();
        }

        return () => {
            if (currentPath == path && cleanup) {
                cleanup();
            }
        };
    }, [currentPath, ...dependencies]);
}
