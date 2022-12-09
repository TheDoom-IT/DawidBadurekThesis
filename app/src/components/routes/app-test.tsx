import { BufferGeometry, Canvas, Points, PointsMaterial, Scene } from "three-js-react-component";
import * as THREE from 'three';

export const AppTest = () => {
    const divId = 'canvas-div';

    const test = new THREE.Points();

    return (
        <div className='my-box' id={divId}>
            <Canvas divId={divId}>
                <Scene>
                    <Points>
                        <BufferGeometry></BufferGeometry>
                        <PointsMaterial params={[{ color: 0xffffff, size: 10 }]}></PointsMaterial>
                    </Points>
                </Scene>
            </Canvas>
        </div>
    )
}