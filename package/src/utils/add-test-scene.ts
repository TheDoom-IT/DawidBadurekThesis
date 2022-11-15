import * as THREE from 'three';

// creates scene for testing purposes
export const addTestScene = (currRenderer: THREE.WebGLRenderer) => {
    const currCanvas = currRenderer.domElement;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0XFFFFFF);
    const camera = new THREE.PerspectiveCamera(75, currCanvas.width / currCanvas.height, 0.1, 1000);

    camera.position.z = 3;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let animationFrameId = 0;
    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        animationFrameId = requestAnimationFrame(animate);

        currRenderer.render(scene, camera);
    }

    animate();

    return () => {
        cancelAnimationFrame(animationFrameId)
        scene.remove(cube);
        geometry.dispose();
        material.dispose();
    }
}