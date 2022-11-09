import React, { useRef, useState } from "react";
import { Canvas } from "three-js-react-component";

const Static = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [id, setId] = useState(0);

  return (
    <>
      <button onClick={() => setId(id + 1)}>Update ID!</button>
      {id}
      <div ref={divRef} style={{ width: '100%', height: '100%' }}>
        <Canvas divRef={divRef}></Canvas>
      </div>
    </>
  );
}

export default Static;