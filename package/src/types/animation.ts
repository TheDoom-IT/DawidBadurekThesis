export type Animation<R> = (ref: R, timestamp: number, elapsed: number) => void;
