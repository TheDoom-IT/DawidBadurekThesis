import { useState } from 'react';
import {
    AmbientLight,
    BoxGeometry,
    Canvas,
    MainScene,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
} from 'react-three-component';

export const RecreateCanvas = () => {
    const [divId] = useState(new Date().getTime().toString());
    const [key, setKey] = useState(1);

    const divStyle: React.CSSProperties = {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    };

    return (
        <>
            <button onClick={() => setKey(key + 1)}> Recreate Canvas</button>
            <div id={divId} style={divStyle}>
                <Canvas key={key}>
                    <PerspectiveCamera position={[0, 0, 5]} />
                    <MainScene>
                        <AmbientLight />
                        <Mesh>
                            <BoxGeometry></BoxGeometry>
                            <MeshBasicMaterial params={[{ color: 0xffffff }]}></MeshBasicMaterial>
                        </Mesh>
                    </MainScene>
                </Canvas>
            </div>
        </>
    );
};
