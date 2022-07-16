import RenderContext from "../RenderContext.js";

export class Mesh {
    constructor({vertexes, indexes = null, dimension = 3}) {
        this.dimension = dimension;
        this.vertexes = vertexes;
        this.indexes = indexes;

        //
        this.gl = RenderContext.getGL();
        this.program = RenderContext.getProgram()
        this.vertexPosition = this.gl.getAttribLocation(this.program, 'a_position')
        this.indexBuffer = null
        this.init()
    }

    init() {
        this.vertexBuffer = this.gl.createBuffer()

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer)

        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(this.vertexes),
            this.gl.STATIC_DRAW
        )
    }

    draw() {
        this.gl.enableVertexAttribArray(this.vertexPosition)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer)
        const type = this.gl.FLOAT
        const normalized = false
        const stride = 0
        const offset = 0
        this.gl.vertexAttribPointer(
            this.vertexPosition,
            this.dimension,
            type,
            normalized,
            stride,
            offset
        )
        this.gl.enableVertexAttribArray(this.vertexPosition)

        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertexes / this.dimension)
    }
}