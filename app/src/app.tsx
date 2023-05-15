import { useEffect, useRef, useState } from 'react';
import './styles/app/app.css';
import { Renderer } from './components/renderer/renderer';
import { File } from './schemas/file-schema';
import { LoadFileMenu } from './components/load-file-menu';
import { SelectedSourceObject } from './types/selected-source';
import { Settings } from './components/settings';
import { NAME_REGEX } from './constants/name-regex';

export const App = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState('#ffffff');
    const [file, setFile] = useState<File | null>(null);
    const [selectedSources, setSelectedSources] = useState<SelectedSourceObject>({});
    const [clipRotationAsCamera, setClipRotationAsCamera] = useState(true);
    const [showMCalo, setShowMCalo] = useState(true);

    useEffect(() => {
        if (!file) {
            setSelectedSources({});
            return;
        }
        const result: SelectedSourceObject = {};

        file.mTracks.forEach((track) => {
            if (result[track.source] === undefined) {
                const sourceName = NAME_REGEX.exec(track.gid)?.[1] ?? `source ${track.source}`;
                result[track.source] = { name: sourceName, selected: true, count: 0 };
            }

            result[track.source].count = result[track.source].count + 1;
        });

        setSelectedSources(result);
    }, [file]);

    useEffect(() => {
        if (!divRef.current) {
            return;
        }

        const color = window.getComputedStyle(divRef.current).getPropertyValue('background-color');

        setColor(color);
    }, [divRef]);

    const closeFile = () => {
        setFile(null);
    };

    return (
        <>
            <div className="App" ref={divRef}>
                {file === null && <LoadFileMenu setFile={setFile} />}
                {file !== null && (
                    <>
                        <Renderer
                            file={file}
                            color={color}
                            selectedSources={selectedSources}
                            clipRotationAsCamera={clipRotationAsCamera}
                            showMCalo={showMCalo}
                        />
                        <Settings
                            file={file}
                            closeFile={closeFile}
                            selectedSources={selectedSources}
                            setSelectedSources={setSelectedSources}
                            clipRotationAsCamera={clipRotationAsCamera}
                            setClipRotationAsCamera={setClipRotationAsCamera}
                            showMCalo={showMCalo}
                            setShowMCalo={setShowMCalo}
                        />
                    </>
                )}
            </div>
        </>
    );
};
