import { File } from '../schemas/file-schema';
import { SelectedSourceObject } from '../types/selected-source';
import { SelectSource } from './select-source';
import './../styles/app/statistics.css';
import { GlowSettings } from './glow-settings';
import { RGBColor } from 'react-color';

interface StatisticsProps {
    file: File;
    closeFile: () => void;
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
    clipRotationAsCamera: boolean;
    setClipRotationAsCamera: (value: boolean) => void;
    showCalorimeter: boolean;
    setShowCalorimeter: (value: boolean) => void;
    glowStrength: number;
    setGlowStrength: (value: number) => void;
    setGlowColor: (value: RGBColor) => void;
}

export const Statistics = ({
    file,
    closeFile,
    selectedSources,
    setSelectedSources,
    clipRotationAsCamera,
    setClipRotationAsCamera,
    showCalorimeter,
    setShowCalorimeter,
    glowStrength,
    setGlowStrength,
    setGlowColor,
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
                <label htmlFor={'showMCalo'}>Show calorimeter</label>
                <input
                    id={'showMCalo'}
                    className="checkbox-input"
                    type="checkbox"
                    name={'showMCalo'}
                    checked={showCalorimeter}
                    onChange={() => setShowCalorimeter(!showCalorimeter)}
                />
            </div>
            <GlowSettings
                glowStrength={glowStrength}
                setGlowStrength={setGlowStrength}
                setGlowColor={setGlowColor}
            />
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
