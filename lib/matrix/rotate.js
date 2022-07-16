export const rotateX = (angle) => {
    const c = Math.cos(angle)
    const s = Math.sin(angle)

    return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    ]
}

export const rotateY = (angle) => {
    const c = Math.cos(angle)
    const s = Math.sin(angle)

    return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    ]
}

export function rotateZ(angle) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    return [
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}
