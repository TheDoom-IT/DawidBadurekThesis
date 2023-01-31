import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import '../../styles/app/app.css'
import { Renderer } from '../renderer'
import { Statistics } from '../statistics';
import tracks1 from '../../static/tracks1647477806262.json';
import tracks2 from '../../static/tracks1647635306347.json';
import { Tracks, tracksSchema } from '../../schemas/tracks-schema';

export const App = () => {
    const divId = useRef('AppDivId');

    const tracks = tracksSchema.parse(tracks1);

    return <div id={divId.current} className="App">
        <Renderer divId={divId.current} tracks={tracks} />
        <div className='margin-box pointer-events-none'>
            <div className='relative-box'>
                <div className='center'>
                    <Link className='home-link' to={ROUTES.HOME}>Home</Link>
                </div>
                <Statistics tracks={tracks} />
            </div>
        </div>
    </div>
}