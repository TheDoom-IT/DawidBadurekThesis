import { useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const Recreate = () => {
    const [divId] = useState(new Date().getTime().toString());
    const [key, setKey] = useState(1);

    const divStyle: React.CSSProperties = {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    };

    return (
        <>
            <button onClick={() => setKey(key + 1)}> Recreate Canvas</button >
            <div id={divId} style={divStyle}>
                <Canvas divId={divId} key={key}></Canvas>
            </div>
        </>
    );
}


export default Recreate;