import { useState } from 'react';
import { Canvas } from 'three-js-react-component';

export const Static = () => {
    const [divId] = useState(new Date().getTime().toString());
    const [id, setId] = useState(0);

    return (
        <>
            <button onClick={() => setId(id + 1)}>Update ID!</button>
            {id}
            <div
                id={divId}
                style={{ width: '100%', height: '100%', minHeight: 100, backgroundColor: 'blue' }}>
                <Canvas divId={divId}></Canvas>
            </div>
        </>
    );
};
