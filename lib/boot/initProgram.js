// import vertexShaderSource from '../../apps/02-3d-cube/vertex-shader.glsl?raw'
// import fragmentShaderSource from '../../apps/02-3d-cube/fragment-shader.glsl?raw'

const vertexShaderSource = document.getElementById("vertex-shader").text
const fragmentShaderSource = document.getElementById("fragment-shader").text
export const loadShader = (gl, type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const err = "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
        gl.deleteShader(shader)
        throw err
    }
    return shader;
}

export const initProgram = (gl) => {
    console.log(vertexShaderSource, fragmentShaderSource)
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    return program
}