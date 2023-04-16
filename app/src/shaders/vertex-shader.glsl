varying vec3 vPosition;

#include <clipping_planes_pars_vertex>

void main() {
    #include <begin_vertex>
    #include <project_vertex>

    vPosition = mvPosition.xyz;
    #include <clipping_planes_vertex>
}