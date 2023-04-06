import { z } from 'zod';

const mCluterSchema = z.object({
    X: z.number(),
    Y: z.number(),
    Z: z.number(),
});

const mCaloSchema = z.object({
    energy: z.number(),
    eta: z.number(),
    phi: z.number(),
});

const mTrackSchema = z.object({
    count: z.number(),
    source: z.number(),
    gid: z.string(),
    jsonStartingXYZ: z.array(z.number()).length(3),
    time: z.number(),
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
        collisionTime: z.coerce.date(),
        trackCount: z.number(),
        mTracks: z.array(mTrackSchema.refine(validatemTracksLength)),
        mClusters: z.array(mCluterSchema),
        mCalo: z.array(mCaloSchema).optional(),
    })
    .refine((obj) => obj.trackCount === obj.mTracks.length);

export type Tracks = z.infer<typeof tracksSchema>;
export type Track = z.infer<typeof mTrackSchema>;
export type Calo = z.infer<typeof mCaloSchema>;
