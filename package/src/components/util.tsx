import * as THREE from 'three';

export const initializeThree = (currRenderer: THREE.WebGLRenderer) => {
    console.log('initializeThree');
    const currCanvas = currRenderer.domElement;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0XFFFFFF);
    const camera = new THREE.PerspectiveCamera(75, currCanvas.width / currCanvas.height, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        if (currRenderer.getContext().isContextLost()) return;
        requestAnimationFrame(animate);
        // cancelAnimationFrame();
        currRenderer.render(scene, camera);
    }

    requestAnimationFrame(animate);

    return () => {
        scene.remove(cube);
        geometry.dispose();
        material.dispose();
    }
}