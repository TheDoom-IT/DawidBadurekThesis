import { useEffect, useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const DivChange = () => {
    const [divId1] = useState(new Date().getTime().toString());
    const [divId2] = useState((new Date().getTime() + 1).toString());
    const [isLeft, setIsLeft] = useState(true);

    return (
        <>
            Canvas is on the {isLeft ? 'left' : 'right'}!
            <button onClick={() => setIsLeft(!isLeft)}> Change position</button >
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div id={divId2} className='w-50'>
                    <Canvas divId={isLeft ? divId1 : divId2}></Canvas>
                </div>
                <div id={divId1} className='w-50'></div>
            </div>
        </>
    );
}

export default DivChange;