const bg = '#FFFDF2'
const black = '#666666'
const squareSize = 500

import vs_01 from '../shaders/vertex_01.glsl'
import fs_01 from '../shaders/fragment_01.glsl'

import vs_02 from '../shaders/vertex_02.glsl'
import fs_02 from '../shaders/fragment_02.glsl'

/**
 * sketch01
 * @param p
 */
export const sketch01 = (p) => {
  p.setup = () => {
    const w = p.windowWidth
    const h = p.windowHeight
    p.createCanvas(w, h, p.WEBGL)
    const createShader = p.createShader(vs_01, fs_01)
    p.noStroke()
    p.shader(createShader)
    createShader.setUniform('resolution', [w, h])
    p.quad(-1, -1, -1, 1, 1, 1, 1, -1)
    p.resetShader()
  }

  p.draw = () => {}

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.keyPressed = () => {
    if (p.key === 's') p.saveCanvas(p.canvas, 'image0', 'png')
  }
}

/**
 * sketch02
 * @param p
 */
export const sketch02 = (p) => {
  p.setup = () => {
    const w = p.windowWidth
    const h = p.windowHeight
    const wh = 75
    const n = 16
    p.createCanvas(w, h, p.WEBGL)

    const createShader = p.createShader(vs_02, fs_02)

    p.rectMode(p.CENTER)
    p.noStroke()
    p.background('#B0D0B0')

    for (let i = 0; i < n; i++) {
      let r = p.radians((360 / 16) * i)
      let x = (p.width / 2.5) * p.cos(r)
      let y = (p.height / 2.5) * p.sin(r)

      p.shader(createShader)

      p.push()
      p.translate(x, y)
      p.rotate(r)
      p.rect(0, 0, wh, wh)
      p.pop()

      p.resetShader()
    }

    p.shader(createShader)

    p.push()
    p.translate(100, -150)
    p.rotate(p.radians(30))
    p.rect(0, 0, wh, wh)
    p.pop()

    p.push()
    p.translate(100, -50)
    p.rotate(p.radians(60))
    p.ellipse(0, 0, wh, wh)
    p.pop()

    p.push()
    p.translate(100, 50)
    p.rotate(p.radians(270))
    p.triangle(0, -wh / 2, wh / 2, wh / 2, -wh / 2, wh / 2)
    p.pop()

    p.push()
    p.translate(100, 150)
    p.rotate(p.radians(-30))
    p.plane(wh, wh)
    p.pop()

    p.resetShader()

    p.push()
    p.translate(-100, -150)
    p.rotate(p.radians(30))
    p.rect(0, 0, wh, wh)
    p.pop()

    p.push()
    p.translate(-100, -50)
    p.rotate(p.radians(60))
    p.ellipse(0, 0, wh, wh)
    p.pop()

    p.push()
    p.translate(-100, 50)
    p.rotate(p.radians(270))
    p.triangle(0, -wh / 2, wh / 2, wh / 2, -wh / 2, wh / 2)
    p.pop()

    p.push()
    p.translate(-100, 150)
    p.rotate(p.radians(-30))
    p.plane(wh, wh)
    p.pop()
  }

  p.draw = () => {}

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.keyPressed = () => {
    if (p.key === 's') p.saveCanvas(p.canvas, 'image0', 'png')
  }
}
