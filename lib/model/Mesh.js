export class Mesh {
    constructor({vertexes, indexes = null, dimension = 3}) {
        this.dimension = dimension;
        this.vertexes = vertexes;
        this.indexes = indexes;

        //
        this.gl = null;
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
}