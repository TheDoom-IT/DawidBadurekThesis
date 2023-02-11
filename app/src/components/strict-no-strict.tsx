import React, { useState } from 'react';
import '../styles/strict-no-strict.css';

interface StrictNoStrictInterface {
    children: JSX.Element;
}

export const StrictNoStrict = (props: StrictNoStrictInterface) => {
    const [strictVis, setStrictVis] = useState(false);
    const [noStrictVis, setNoStrictVis] = useState(false);

    return (
        <div className="strict-no-strict">
            <React.StrictMode>
                <div className="w-50">
                    <p>Strict</p>
                    <div className="canvas-container">
                        {strictVis ? (
                            props.children
                        ) : (
                            <button onClick={() => setStrictVis(true)}>Show</button>
                        )}
                    </div>
                </div>
            </React.StrictMode>
            <div className="w-50">
                <p>No strict</p>
                <div className="canvas-container">
                    {noStrictVis ? (
                        props.children
                    ) : (
                        <button onClick={() => setNoStrictVis(true)}>Show</button>
                    )}
                </div>
            </div>
        </div>
    );
};
