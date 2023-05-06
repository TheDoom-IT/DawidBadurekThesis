import { File } from '../schemas/file-schema';
import { SelectedSourceObject } from '../types/selected-source';
import { SelectSource } from './select-source';
import './../styles/app/statistics.css';

interface StatisticsProps {
    file: File;
    closeFile: () => void;
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
    clipRotationAsCamera: boolean;
    setClipRotationAsCamera: (value: boolean) => void;
    showMCalo: boolean;
    setShowMCalo: (value: boolean) => void;
}

export const Statistics = ({
    file,
    closeFile,
    selectedSources,
    setSelectedSources,
    clipRotationAsCamera,
    setClipRotationAsCamera,
    showMCalo,
    setShowMCalo,
}: StatisticsProps) => {
    return (
        <div className="statistics box">
            <h3 className="text-center">Statistics</h3>
            Number of tracks: {file.mTracks.length}
            <br />
            <div className={'checkbox-line'}>
                <label htmlFor={'rotateClipping'}>Rotate</label>
                <input
                    id={'rotateClipping'}
                    className="checkbox-input"
                    type="checkbox"
                    name={'rotateClipping'}
                    checked={clipRotationAsCamera}
                    onChange={() => setClipRotationAsCamera(!clipRotationAsCamera)}
                />
            </div>
            <div className={'checkbox-line'}>
                <label htmlFor={'showMCalo'}>Show mCalo</label>
                <input
                    id={'showMCalo'}
                    className="checkbox-input"
                    type="checkbox"
                    name={'showMCalo'}
                    checked={showMCalo}
                    onChange={() => setShowMCalo(!showMCalo)}
                />
            </div>
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
