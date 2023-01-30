import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import '../../styles/app/app.css'
import { Renderer } from '../renderer'
import { Statistics } from '../statistics';

export const App = () => {
    const divId = useRef('AppDivId');

    return <div id={divId.current} className="App">
        <Renderer divId={divId.current} />
        <div className='margin-box'>
            <div className='relative-box'>
                <div className='center'>
                    <Link className='home-link' to={ROUTES.HOME}>Home</Link>
                </div>
                <Statistics />
            </div>
        </div>
    </div>
}