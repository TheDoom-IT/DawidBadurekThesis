import { Tracks } from '../schemas/tracks-schema';
import { SelectedSourceObject } from '../types/selected-source';
import { SelectSource } from './select-source';
import './../styles/app/statistics.css';

interface StatisticsProps {
    tracks: Tracks;
    closeFile: () => void;
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
    clipRotationAsCamera: boolean;
    setClipRotationAsCamera: (value: boolean) => void;
}

export const Statistics = ({
    tracks,
    closeFile,
    selectedSources,
    setSelectedSources,
    clipRotationAsCamera,
    setClipRotationAsCamera,
}: StatisticsProps) => {
    return (
        <div className="statistics box">
            <h3 className="text-center">Statistics</h3>
            Number of tracks: {tracks.trackCount}
            <br />
            <span>
                <label htmlFor={'rotateClipping'}>Rotate</label>
                <input
                    id={'rotateClipping'}
                    type="checkbox"
                    name={'rotateClipping'}
                    checked={clipRotationAsCamera}
                    onChange={() => setClipRotationAsCamera(!clipRotationAsCamera)}
                />
            </span>
            <br />
            <div className="hline"></div>
            <SelectSource
                selectedSources={selectedSources}
                setSelectedSources={setSelectedSources}
            />
            <div className="hline"></div>
            <button onClick={closeFile}>Load another file</button>
        </div>
    );
};
