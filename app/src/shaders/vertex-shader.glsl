varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vCamera;

#include <clipping_planes_pars_vertex>

void main() {
    #include <begin_vertex>
    #include <project_vertex>

    vPosition = mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
    vCamera = normalize(cameraPosition);
    #include <clipping_planes_vertex>
}