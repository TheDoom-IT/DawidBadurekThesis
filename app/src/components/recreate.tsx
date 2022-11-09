import { useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const Recreate = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [key, setKey] = useState(1);

    const divStyle: React.CSSProperties = {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    };

    return (
        <>
            <button onClick={() => setKey(key + 1)}> Recreate Canvas</button >
            <div ref={divRef} style={divStyle}>
                <Canvas key={key} divRef={divRef}></Canvas>
            </div>
        </>
    );
}


export default Recreate;