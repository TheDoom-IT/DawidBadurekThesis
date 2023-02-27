# react-three-component
React-three-component is a TypeScript library adding React component.

## Usage
Exemplary component rendering two rotating meshes:
```tsx
import {
    BoxGeometry,
    Canvas,
    CapsuleGeometry,
    DirectionalLight,
    MainScene,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
} from 'react-three-component';
import * as THREE from 'three';

export const ThreeComponent = () => {
    const divId = 'canvas-div';

    const meshAnimation = (ref: THREE.Mesh, timestamp: number, elapsed: number) => {
        ref.rotation.x += elapsed * 0.001;
        ref.rotation.z += elapsed * 0.001;
    };

    const initializeMainScene = (ref: THREE.Scene | null) => {
        if (ref) {
            ref.background = new THREE.Color(0xffffff);
        }
    };

    return (
        <div id={divId}>
            <Canvas divId={divId}>
                <PerspectiveCamera position={[0, 0, 5]} />
                <OrbitControls />
                <MainScene innerRef={initializeMainScene}>
                    <DirectionalLight params={[0xffffff, 1]} position={[-5, 0, 0]} />
                    <DirectionalLight params={[0xffffff, 0.8]} position={[5, 0, 3]} />
                    <Mesh position={[-1, 0, 0]} animate={meshAnimation}>
                        <BoxGeometry />
                        <MeshStandardMaterial params={[{ color: 0x47b9db }]} />
                    </Mesh>
                    <Mesh position={[1, 0, 0]} animate={meshAnimation}>
                        <CapsuleGeometry params={[0.5, 0.5, 10, 10]} />
                        <MeshStandardMaterial params={[{ color: 0xdb47b9 }]} />
                    </Mesh>
                </MainScene>
            </Canvas>
        </div>
    );
};
```
Result:

![Exemplary component video](https://raw.githubusercontent.com/TheDoom-IT/DawidBadurekThesis/master/docs/example.gif)

## Canvas
`Canvas` is the main element that is reponsible for the whole rendering process. It requires `divId` param. HTML `<canvas>` element will be injected to the given `div` element. Its size will be equal to the `div` element.

## MainScene
Main `THREE.Scene` element used by the renderer. All of the objects should placed inside
this scene to be visible.

## Props
The props of every component contains the following arguments:
- innerRef - React.ForwardedRef that can be used to get reference to the 
THREE object or as in the example to set additional properties of the object.
- params - constructor parameters of the THREE object equivalent to the component.
- animate - every THREE object can be easily animated using this parameter

All of the props elements expect `innerRef` and `params` can be modified between rerenders. The components
detects it and applies a new value. Therefore it is usefull to wrap animate function in
`useMemo`, so the same function reference is passed every rerender and component does not see any change in the animate function.
It may increase the performance.


## Objects
`react-three-component` supports the following objects:
- Scene
- Mesh
- Points
- Line
- LineLoop

They have special props to simplify creation of scenes:
- position - allow to position an object in the scene
- rotation - sets rotation of the object

## Cameras
- PerspectiveCamera
- OrtographicCamera

## Geometries
- BoxGeometry
- BufferGeometry
- PlaneGeometry

## Materials
- MeshBasicMaterial
- MeshStandardMaterial
- PointsMaterial
- LineBasicMaterial

## Ligths
- AmbientLight
- DirectionalLight