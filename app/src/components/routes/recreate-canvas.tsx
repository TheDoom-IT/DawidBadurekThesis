import { useState } from 'react';
import {
    AmbientLight,
    BoxGeometry,
    Canvas,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
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
                <Canvas divId={divId} key={key}>
                    <PerspectiveCamera
                        innerRef={(r) => {
                            if (r != null) r.position.z = 5;
                        }}
                    />
                    <Scene>
                        <AmbientLight />
                        <Mesh>
                            <BoxGeometry></BoxGeometry>
                            <MeshBasicMaterial params={[{ color: 0xffffff }]}></MeshBasicMaterial>
                        </Mesh>
                    </Scene>
                </Canvas>
            </div>
        </>
    );
};
