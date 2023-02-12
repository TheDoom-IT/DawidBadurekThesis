import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import '../../styles/app/app.css';
import { Renderer } from '../renderer';
import { Statistics } from '../statistics';
import tracks1 from '../../static/tracks1647477806262.json';
import tracks2 from '../../static/tracks1647635306347.json';
import { tracksSchema } from '../../schemas/tracks-schema';

const trackFiles = [tracks1, tracks2];

export const App = () => {
    const divId = useRef('AppDivId');
    const [trackId, setTrackId] = useState(0);
    const tracks = tracksSchema.parse(trackFiles[1]);

    return (
        <div id={divId.current} className="App">
            <Renderer divId={divId.current} tracks={tracks} />
            <div className="home-link-wrapper">
                <Link className="home-link" to={ROUTES.HOME}>
                    Home
                </Link>
            </div>
            <Statistics tracks={tracks} setTrackId={setTrackId} trackId={trackId} />
        </div>
    );
};
