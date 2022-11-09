import React from "react";
import './strict-no-strict.css';

interface StrictNoStrictInterface {
    children: JSX.Element;
}

const StrictNoStrict = (props: StrictNoStrictInterface) => {
    return <div className="strict-no-strict">
        <React.StrictMode>
            <div className="w-50">
                <p>Strict</p>
                <div className="canvas-container">
                    {props.children}
                </div>
            </div>
        </React.StrictMode>
        <div className="w-50">
            <p>No strict</p>
            <div className="canvas-container">
                {props.children}
            </div>
        </div>
    </div>
}

export default StrictNoStrict;