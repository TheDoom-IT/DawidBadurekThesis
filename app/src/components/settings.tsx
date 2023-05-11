import { useState } from 'react';
import { File } from '../schemas/file-schema';
import '../styles/app/data-windows.css';
import { SelectedSourceObject } from '../types/selected-source';
import { Graph } from './graph';
import { Statistics } from './statistics';

interface SettingsProps {
    file: File;
    closeFile: () => void;
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
    clipRotationAsCamera: boolean;
    setClipRotationAsCamera: (value: boolean) => void;
    showMCalo: boolean;
    setShowMCalo: (value: boolean) => void;
}

export const Settings = ({
    file,
    closeFile,
    selectedSources,
    setSelectedSources,
    clipRotationAsCamera,
    setClipRotationAsCamera,
    showMCalo,
    setShowMCalo,
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
                    showMCalo={showMCalo}
                    setShowMCalo={setShowMCalo}
                />
            </div>
        </div>
    );
};
