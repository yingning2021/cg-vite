export function perspective(angle, a, zMin, zMax) {
    // 这个单位是弧度还是角度呀
    let ang = Math.tan(angle * 0.5)

    return [
        0.5 / ang, 0, 0, 0,
        0, 0.5 * a / ang, 0, 0,
        0, 0, -(zMax + zMin) / (zMax - zMin), -1,
        0, 0, (-2 * zMax * zMin) / (zMax - zMin), 0
    ]
}