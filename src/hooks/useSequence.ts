import { useState } from "react";

export function useSequence<T>({
    limit = Infinity,
}: {
    limit?: number;
} = {}) {
    const [sequence, setSequence] = useState<T[]>([]);

    function append(value: T) {
        setSequence([
            ...sequence.slice(Math.max(sequence.length - (limit - 1), 0)),
            value,
        ]);
    }

    function clear() {
        setSequence([]);
    }

    return [sequence, append, clear] as const;
}
