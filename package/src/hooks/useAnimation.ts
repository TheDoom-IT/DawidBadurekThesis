import { useLayoutEffect, useMemo, useRef } from 'react';
import { Animation } from '../types';

export function useAnimation<R>(animateFunction: Animation<R> | undefined, object: R | null) {
    const animationFrameId = useRef<number | null>(null);
    const previousTimestamp = useRef<number | null>(null);

    const animate = useMemo(() => {
        if (!animateFunction || !object) {
            return;
        }

        const animateFrame = (timestamp: number) => {
            if (previousTimestamp.current === null) {
                previousTimestamp.current = timestamp;
            }
            const elapsed = timestamp - previousTimestamp.current;
            previousTimestamp.current = timestamp;

            animateFunction(object, timestamp, elapsed);

            animationFrameId.current = requestAnimationFrame(animateFrame);
        };

        return animateFrame;
    }, [animateFunction, object]);

    useLayoutEffect(() => {
        if (!animate) {
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
    }, [animate]);
}
