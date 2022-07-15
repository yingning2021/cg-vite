import {Mesh} from "../model/Mesh.js";

export const d2_f = (x, y, width, height, thickness) => {
    const data = [
        // 左边
        x, y,
        x + thickness, y,
        x, y + height,
        x, y + height,
        x + thickness, y,
        x + thickness, y + height,
        //  第一个横杠
        x + thickness, y,
        x + width, y,
        x + thickness, y + thickness,
        x + thickness, y + thickness,
        x + width, y,
        x + width, y + thickness,
        // 第二个横杠
        x + thickness, y + thickness * 2,
        x + width * 2 / 3, y + thickness * 2,
        x + thickness, y + thickness * 3,

        x + thickness, y + thickness * 3,
        x + width * 2 / 3, y + thickness * 2,
        x + width * 2 / 3, y + thickness * 3
    ]

    return new Mesh({vertexes: data, dimension: 2})
}