import { useEffect, useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const RefChange = () => {
    const firstDiv = useRef<HTMLDivElement>(null);
    const secondDiv = useRef<HTMLDivElement>(null);
    const [isLeft, setIsLeft] = useState(true);

    return (
        <>
            Canvas is on the {isLeft ? 'left' : 'right'}!
            <button onClick={() => setIsLeft(!isLeft)}> Change position</button >
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div ref={firstDiv} className='w-50'>
                    <Canvas divRef={isLeft ? firstDiv : secondDiv}></Canvas>
                </div>
                <div ref={secondDiv} className='w-50'></div>
            </div>
        </>
    );
}

export default RefChange;