varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vCamera;

#include <clipping_planes_pars_fragment>

void main() {
    #include <clipping_planes_fragment>

    gl_FragColor = vec4(0.62f, 0.91f, 0.58f, 1.0f);

    #if NUM_CLIPPING_PLANES > 0
    vec4 clippingPlane = clippingPlanes[0]; // clippingPlane is in the camera coordinates
    float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;
    if(abs(distance) < 1.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    #endif
}