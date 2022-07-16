import {d3_cube} from "../../lib/shape/d3_cube.js";
import {Model} from "../../lib/model/Model.js";
import RenderContext from "../../lib/RenderContext.js";
import {perspective} from "../../lib/matrix/project.js";
import {rotateX, rotateY} from "../../lib/matrix/index.js";
import {rotateZ} from "../../lib/matrix/rotate.js";

function main() {
    const gl = RenderContext.getGL()
    const mesh = d3_cube()
    const model = new Model(mesh)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    const mPerspect = perspective(
        Math.PI * 0.6, gl.canvas.width / gl.canvas.height, 0, 100.0
    )

    model.setMatrixUniform("u_project", mPerspect)
    let angle = 0.0

    function draw() {
        const rotateYMatrix = rotateY(angle)
        const rotateZMatrix = rotateZ(angle)
        model.setMatrixUniform("u_rotatey", rotateYMatrix)
        model.setMatrixUniform("u_rotatez", rotateZMatrix)
        model.draw()
        angle += 0.01
        requestAnimationFrame(draw)
    }

    draw()
}

main()