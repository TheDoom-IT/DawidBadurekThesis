import { z } from 'zod';

const mCluterSchema = z.object({
    X: z.number(),
    Y: z.number(),
    Z: z.number(),
});

const mTrackSchema = z.object({
    count: z.number(),
    jsonStartingXYZ: z.array(z.number()).length(3),
    mPolyX: z.array(z.number()),
    mPolyY: z.array(z.number()),
    mPolyZ: z.array(z.number()),
    mClusters: z.array(mCluterSchema),
});

function validatemTracksLength(obj: z.infer<typeof mTrackSchema>) {
    return (
        obj.count === obj.mPolyX.length &&
        obj.count === obj.mPolyY.length &&
        obj.count === obj.mPolyZ.length
    );
}

export const tracksSchema = z
    .object({
        fileVersion: z.number(),
        collisionTime: z.coerce.date(),
        trackCount: z.number(),
        mTracks: z.array(mTrackSchema.refine(validatemTracksLength)),
        mClusters: z.array(mCluterSchema),
    })
    .refine((obj) => obj.trackCount === obj.mTracks.length);

export type Tracks = z.infer<typeof tracksSchema>;
export type Track = z.infer<typeof mTrackSchema>;
