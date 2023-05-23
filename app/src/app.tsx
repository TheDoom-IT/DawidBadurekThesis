import { useEffect, useRef, useState } from 'react';
import './styles/app/app.css';
import { Renderer } from './components/renderer/renderer';
import { File } from './schemas/file-schema';
import { LoadFileMenu } from './components/load-file-menu';
import { SelectedSourceObject } from './types/selected-source';
import { Settings } from './components/settings';
import { NAME_REGEX } from './constants/name-regex';
import { RGBColor } from 'react-color';
import { colorStringToRGB, pushLuminance, GLOW_COLORS } from './constants/glow-colors';

export const App = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState('#ffffff');
    const [file, setFile] = useState<File | null>(null);
    const [selectedSources, setSelectedSources] = useState<SelectedSourceObject>({});
    const [clipRotationAsCamera, setClipRotationAsCamera] = useState(true);
    const [showCalorimeter, setShowCalorimeter] = useState(true);
    const [glowStrength, setGlowStrength] = useState(1.0);
    const [glowColor, setGlowColor] = useState<RGBColor>(
        pushLuminance(colorStringToRGB(GLOW_COLORS[0])),
    );

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
                            showCalorimeter={showCalorimeter}
                            glowStrength={glowStrength}
                            glowColor={glowColor}
                        />
                        <Settings
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
                    </>
                )}
            </div>
        </>
    );
};
