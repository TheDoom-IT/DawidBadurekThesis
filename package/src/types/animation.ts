export type animation<R> = (timestamp: number, elapsed: number, ref: R) => void;
