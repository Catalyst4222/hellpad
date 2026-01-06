// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

// Add your SFSymbol to MaterialIcons mappings here.
const MaterialMapping = {
    // See MaterialIcons here: https://icons.expo.fyi
    // See SF Symbols in the SF Symbols app on Mac.
    "house.fill": "home",
    "paperplane.fill": "send",
    "chevron.left.forwardslash.chevron.right": "code",
    "chevron.right": "chevron-right",
} as Partial<
    Record<
        import("expo-symbols").SymbolViewProps["name"],
        React.ComponentProps<typeof MaterialIcons>["name"]
    >
>;

// const FontAwesomeMapping = {

// } as Partial<Record<
//     import("expo-symbols").SymbolViewProps["name"],
//     React.ComponentProps<typeof FontAwesome>["name"]
// >>

export type IconSymbolName = keyof typeof MaterialMapping;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style,
}: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    // todo make this more generic for more icons

    // if (name in MaterialMapping) {
    return (
        <MaterialIcons
            color={color}
            size={size}
            name={MaterialMapping[name]}
            // @ts-expect-error Expo has this error by default so /shrug
            style={style}
        />
    );
    // }

    // if (name in FontAwesomeMapping) {
    //     return <FontAwesome color={color} size={size} name={FontAwesomeMapping[name]} style={style} />
    // }
}
