import { useState } from "react";
import { Canvas } from "three-js-react-component";

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    return (
        <div id={divId}>
            <Canvas divId={divId}>
                <div id="1">
                    <div id="2">
                    </div>
                </div>
            </Canvas>
        </div>
    )
}