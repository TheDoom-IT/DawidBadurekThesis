varying vec3 vPosition;

#include <clipping_planes_pars_fragment>

void main() {
    #include <clipping_planes_fragment>

    gl_FragColor = vec4(0.0,0.0,0.0, 1.0f);

    #if NUM_CLIPPING_PLANES > 0
    vec4 clippingPlane = clippingPlanes[0]; // clippingPlane is in the camera coordinates
    float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;
    if(abs(distance) < 4.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    #endif
}