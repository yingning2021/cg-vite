import vertexShaderSource from '../../apps/01-2d/vertex-shader.glsl?raw'
import fragmentShaderSource from '../../apps/01-2d/fragment-shader.glsl?raw'

export const loadShader = (gl, type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const err = "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
        gl.deleteShader(shader)
        throw err
    }
    return shader;
}

export const initProgram = (gl) => {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    return program
}