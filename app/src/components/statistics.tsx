import { Tracks } from '../schemas/tracks-schema';
import { TracksRange } from './tracks-range';

interface StatisticsProps {
    tracks: Tracks;
    setTrackId: (val: number) => void;
    trackId: number;
    closeFile: () => void;
}

export const Statistics = (props: StatisticsProps) => {
    return (
        <div className="statistics box">
            <h3 className="text-center">Statistics</h3>
            <br />
            File version: {props.tracks.fileVersion}
            <br />
            Number of tracks: {props.tracks.trackCount}
            <br />
            {/* <TracksRange
                min={0}
                max={props.tracks.mTracks.length - 1}
                defaultValue={props.trackId}
                setTrackId={props.setTrackId}
            /> */}
            <div className="hline"></div>
            <button onClick={props.closeFile}>Load another file</button>
        </div>
    );
};
