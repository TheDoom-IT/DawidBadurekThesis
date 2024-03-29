import { z } from 'zod';

const mCaloSchema = z.object({
    energy: z.number(),
    eta: z.number(),
    phi: z.number(),
});

const mTrackSchema = z.object({
    count: z.number(),
    source: z.number(),
    gid: z.string(),
    time: z.number(),
    mPolyX: z.array(z.number()),
    mPolyY: z.array(z.number()),
    mPolyZ: z.array(z.number()),
});

function validatemTracksLength(obj: z.infer<typeof mTrackSchema>) {
    return (
        obj.count === obj.mPolyX.length &&
        obj.count === obj.mPolyY.length &&
        obj.count === obj.mPolyZ.length
    );
}

export const fileSchema = z.object({
    mTracks: z.array(
        mTrackSchema.refine(
            validatemTracksLength,
            'PolyX, PolyY, PolyZ should have the same length',
        ),
    ),
    mCalo: z.array(mCaloSchema).optional(),
});

export type File = z.infer<typeof fileSchema>;
export type Track = z.infer<typeof mTrackSchema>;
export type Calo = z.infer<typeof mCaloSchema>;
