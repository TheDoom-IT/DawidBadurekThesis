import { useState } from 'react';
import { File } from '../schemas/file-schema';
import '../styles/app/data-windows.css';
import { SelectedSourceObject } from '../types/selected-source';
import { Graph } from './graph';
import { Statistics } from './statistics';
import { RGBColor } from 'react-color';

interface SettingsProps {
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

export const Settings = ({
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
}: SettingsProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`data-windows ${collapsed ? 'collapsed' : ''}`}>
            <div className="collapse-button" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? 'Show' : 'Hide'}
            </div>
            <div className={`windows-wrapper ${collapsed ? 'hidden' : ''}`}>
                <Graph selectedSources={selectedSources} />
                <Statistics
                    file={file}
                    closeFile={closeFile}
                    selectedSources={selectedSources}
                    setSelectedSources={setSelectedSources}
                    clipRotationAsCamera={clipRotationAsCamera}
                    setClipRotationAsCamera={setClipRotationAsCamera}
                    showCalorimeter={showCalorimeter}
                    setShowCalorimeter={setShowCalorimeter}
                    glowStrength={glowStrength}
                    setGlowStrength={setGlowStrength}
                    setGlowColor={setGlowColor}
                />
            </div>
        </div>
    );
};
