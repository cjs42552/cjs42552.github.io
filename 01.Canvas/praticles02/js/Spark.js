import CanvasOption from "./CanvasOption.js";

export default class Spark extends CanvasOption {
    constructor(x, y, vx, vy, opactiy, colorDeg){
        super ()
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.opactiy = opactiy
        this.colorDeg = colorDeg
    }
    update(){
        this.opactiy -= 0.01

        this.x += this.vx
        this.y += this.vy
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2)
        this.ctx.fillStyle = `hsla(${this.colorDeg}, 100%, 65%, ${this.opactiy})`
        this.ctx.fill()
        this.ctx.closePath()
    }
}