import {Model } from "../../lib/model/Model.js";
import RenderContext from "../../lib/RenderContext.js";
import {d2_f} from "../../lib/shape/d2_f.js";

function main() {
    const gl = RenderContext.getGL();
    const mesh = d2_f(100, 100, 100, 150, 30)
    // const mesh = d2_f(100, 100, 100, 150, 30)
    const model = new Model(mesh)

    model.setVectorUniform("u_color", [
        Math.random(),
        Math.random(),
        Math.random(),
        1.0
    ])

    model.setVectorUniform("u_resolution", [
        gl.canvas.width,
        gl.canvas.height
    ])

    model.draw()
}
main()