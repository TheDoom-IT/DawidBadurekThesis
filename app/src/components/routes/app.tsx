import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import '../../styles/app/app.css';
import { Renderer } from '../renderer';
import { Statistics } from '../statistics';
import { Tracks } from '../../schemas/tracks-schema';
import { LoadFileMenu } from '../load-file-menu';
import { SelectedSource } from '../../types/selected-source';

export const App = () => {
    const divId = useRef('AppDivId');
    const divRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState('#ffffff');
    const [tracks, setTracks] = useState<Tracks | null>(null);
    const [selectedSources, setSelectedSources] = useState<SelectedSource[]>([]);

    useEffect(() => {
        if (!tracks) {
            setSelectedSources([]);
            return;
        }
        const result: SelectedSource[] = [];

        tracks.mTracks.forEach((track) => {
            if (result[track.source] === undefined) {
                const nameRegex = /\[(.*)\/.*\/.*\]/; //match [name/0/00]
                const sourceName = nameRegex.exec(track.gid)?.[1] ?? `source ${track.source}`;
                result[track.source] = { name: sourceName, selected: true, count: 0 };
            }

            result[track.source].count = result[track.source].count + 1;
        });

        setSelectedSources(result);
    }, [tracks]);

    useEffect(() => {
        if (!divRef.current) {
            return;
        }

        const color = window.getComputedStyle(divRef.current).getPropertyValue('background-color');

        setColor(color);
    }, [divRef]);

    const closeFile = () => {
        setTracks(null);
    };

    return (
        <>
            <div id={divId.current} className="App" ref={divRef}>
                {tracks === null && <LoadFileMenu setTracks={setTracks} />}
                {tracks !== null && (
                    <>
                        <Renderer
                            divId={divId.current}
                            tracks={tracks}
                            color={color}
                            selectedSources={selectedSources}
                        />
                        <div className="home-link-wrapper">
                            <Link className="home-link" to={ROUTES.HOME}>
                                Home
                            </Link>
                        </div>
                        <Statistics
                            tracks={tracks}
                            closeFile={closeFile}
                            selectedSources={selectedSources}
                            setSelectedSources={setSelectedSources}
                        />
                    </>
                )}
            </div>
        </>
    );
};
