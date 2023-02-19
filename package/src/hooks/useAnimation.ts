import { useLayoutEffect, useRef } from 'react';
import { Animation } from '../types';

export function useAnimation<R>(animateFunction: Animation<R> | undefined, object: R | null) {
    const animationFrameId = useRef<number | null>(null);
    const previousTimestamp = useRef<number | null>(null);

    const animate = (timestamp: number) => {
        if (!animateFunction || !object) {
            return;
        }

        if (previousTimestamp.current === null) {
            previousTimestamp.current = timestamp;
        }
        const elapsed = timestamp - previousTimestamp.current;
        previousTimestamp.current = timestamp;

        animateFunction(object, timestamp, elapsed);

        animationFrameId.current = requestAnimationFrame(animate);
    };

    useLayoutEffect(() => {
        if (!animateFunction) {
            return;
        }

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = null;
            previousTimestamp.current = null;
        };
    }, [animateFunction, object]);
}
