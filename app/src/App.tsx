import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas } from 'three-js-react-component';

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const [isLeft, setIsLeft] = useState(true);

  const divStyle: React.CSSProperties = {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  };

  return (
    <div className="App">
      <header className="App-header">
        Canvas is on the left!
        <button onClick={() => setIsLeft(!isLeft)}>Change position</button>
        <div ref={isLeft ? divRef : null} style={divStyle}>
          <Canvas ref={rendererRef} divRef={divRef}></Canvas>
        </div>
        <div ref={isLeft ? null : divRef} style={divStyle}></div>
      </header>
    </div>
  );
}

export default App;
