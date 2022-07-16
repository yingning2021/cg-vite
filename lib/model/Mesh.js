import RenderContext from "../RenderContext.js";
import GLVertexBuffer from "./GLVertexBuffer.js";
import GLIndexBuffer from "./GLIndexBuffer.js";

export class Mesh {
    constructor({vertices, indices = null, dimension = 3, colors = null, textCoords, norms}) {
        this.dimension = dimension;
        this.vertices = vertices;
        this.indices = indices;
        this.colors = colors
        this.norms = norms
        this.texCoords = textCoords
        this.gl = RenderContext.getGL()
        this.customVerticesBuffer = []

        this.vertexBuffer = new GLVertexBuffer(
            'a_position',
            new Float32Array(vertices),
            dimension
        )

        if (this.indices) {
            this.indicesBuffer = new GLIndexBuffer(
                new Uint16Array(this.indices),
                dimension
            )
        }
    }


    addVertexBuffer(name, data, dimension) {
        this.customVerticesBuffer.push(new GLVertexBuffer(
            name,
            data,
            dimension
        ))
    }

    draw() {
        const gl = this.gl

        this.vertexBuffer.associate()
        this.customVerticesBuffer.forEach(buffer => {
            buffer.associate()
        })

        if (this.indicesBuffer) {
            gl.drawElements(
                gl.TRIANGLES,
                this.indices.length,
                gl.UNSIGNED_SHORT,
                0
            )
        } else {
            gl.drawArrays(
                gl.TRIANGLES,
                0,
                this.vertices.length / this.dimension
            )
        }
    }
}