import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Canvas } from "three-js-react-component";
import '../../styles/shared.css'

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const portal = createPortal(<div></div>, document.createElement('div'));

    return (
        <div id={divId} className='my-box'>
            <button onClick={() => setIsVisible(!isVisible)}>Change children</button>
            <button onClick={() => setIndex(index + 1)}>Rerender</button>
            <Canvas divId={divId}>
                <>
                    <div></div>
                    <div></div>
                </>
                {portal}
                <div>
                    {isVisible ? <div id="2"></div> : null}
                </div>
            </Canvas>
        </div>
    )
}