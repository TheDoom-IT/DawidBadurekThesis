import { useState } from 'react';
import { Tracks } from '../schemas/tracks-schema';
import '../styles/app/data-windows.css';
import { SelectedSourceObject } from '../types/selected-source';
import { Graph } from './graph';
import { Statistics } from './statistics';

interface DataWindowsProps {
    tracks: Tracks;
    closeFile: () => void;
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
    clipRotationAsCamera: boolean;
    setClipRotationAsCamera: (value: boolean) => void;
}

export const DataWindows = ({
    tracks,
    closeFile,
    selectedSources,
    setSelectedSources,
    clipRotationAsCamera,
    setClipRotationAsCamera,
}: DataWindowsProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`data-windows ${collapsed ? 'collapsed' : ''}`}>
            <div className="collapse-button" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? 'Show' : 'Hide'}
            </div>
            <div className={`windows-wrapper ${collapsed ? 'hidden' : ''}`}>
                <Graph selectedSources={selectedSources} />
                <Statistics
                    tracks={tracks}
                    closeFile={closeFile}
                    selectedSources={selectedSources}
                    setSelectedSources={setSelectedSources}
                    clipRotationAsCamera={clipRotationAsCamera}
                    setClipRotationAsCamera={setClipRotationAsCamera}
                />
            </div>
        </div>
    );
};
