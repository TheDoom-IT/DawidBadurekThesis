import { useState } from "react";
import { Canvas } from "three-js-react-component";
import '../../styles/div-change.css'

export const DivChange = () => {
    const [divId1] = useState(new Date().getTime().toString());
    const [divId2] = useState((new Date().getTime() + 1).toString());
    const [isLeft, setIsLeft] = useState(true);

    return (
        <>
            Canvas is on the {isLeft ? 'left' : 'right'}!
            <button onClick={() => setIsLeft(!isLeft)}> Change position</button >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                <div id={divId1} className='my-box'>
                    <Canvas divId={isLeft ? divId1 : divId2}></Canvas>
                </div>
                <div id={divId2} className='my-box'></div>
            </div>
        </>
    );
}