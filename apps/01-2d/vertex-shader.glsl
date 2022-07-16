attribute vec2 a_position;

uniform vec2 u_resolution;

void main() {

    // [0,1]
    vec2 zeroToOne = a_position / u_resolution;

    // [0,2]
    vec2 zeroToTwo = zeroToOne * 2.0;

    // [-1,1]
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
}
