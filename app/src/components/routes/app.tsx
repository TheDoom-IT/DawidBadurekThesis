import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import '../../styles/app/app.css';
import { Renderer } from '../renderer';
import { Statistics } from '../statistics';
import { Tracks } from '../../schemas/tracks-schema';
import { LoadFileMenu } from '../load-file-menu';

export const App = () => {
    const divId = useRef('AppDivId');
    const divRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState('#ffffff');
    const [trackId, setTrackId] = useState(0);
    const [tracks, setTracks] = useState<Tracks | null>(null);

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
                        <Renderer divId={divId.current} tracks={tracks} color={color} />
                        <div className="home-link-wrapper">
                            <Link className="home-link" to={ROUTES.HOME}>
                                Home
                            </Link>
                        </div>
                        <Statistics
                            tracks={tracks}
                            setTrackId={setTrackId}
                            trackId={trackId}
                            closeFile={closeFile}
                        />
                    </>
                )}
            </div>
        </>
    );
};
