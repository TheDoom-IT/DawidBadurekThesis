import { Tracks } from '../schemas/tracks-schema';
import { SelectedSource } from '../types/selected-source';
import { SelectSource } from './select-source';

interface StatisticsProps {
    tracks: Tracks;
    closeFile: () => void;
    selectedSources: SelectedSource[];
    setSelectedSources: (sources: SelectedSource[]) => void;
}

export const Statistics = ({
    tracks,
    closeFile,
    selectedSources,
    setSelectedSources,
}: StatisticsProps) => {
    return (
        <div className="statistics box">
            <h3 className="text-center">Statistics</h3>
            <br />
            File version: {tracks.fileVersion}
            <br />
            Number of tracks: {tracks.trackCount}
            <br />
            <div className="hline"></div>
            <SelectSource
                selectedSources={selectedSources}
                setSelectedSources={setSelectedSources}
            />
            <button onClick={closeFile}>Load another file</button>
        </div>
    );
};
