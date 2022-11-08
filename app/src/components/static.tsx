import React, { useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const Static = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [id, setId] = useState(0);
  
    const divStyle: React.CSSProperties = {
      width: '50%',
      height: 100,
      backgroundColor: 'blue'
    };
  
    return (
        <div style={{width: '50%', maxWidth: 100}}>
          <button onClick={() => setId(id+1)}>Update ID!</button>
          <div ref={divRef} style={divStyle}>
            <Canvas divRef={divRef}></Canvas>
          </div>
        </div>
    );
}

export default Static;