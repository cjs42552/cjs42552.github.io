const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio

// const canvasWidth = innerWidth
// const canvasHeight = innerheight

// canvas.style.width = canvasWidth + 'px'
// canvas.style.height = canvasHeight + 'px'

// canvas.width = canvasWidth * dpr
// canvas.height = canvasHeight * dpr
// ctx.scale(dpr, dpr)
let canvasWidth
let canvasHeight
let particles

function init (){
    canvasWidth = innerWidth
    canvasHeight = innerHeight

    canvas.style.width = canvasWidth + 'px'
    canvas.style.height = canvasHeight + 'px'

    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr
    ctx.scale(dpr, dpr)

    particles = []
    const TOTAL = canvasWidth / 30
    // console.log(TOTAL)

    for (let i = 0; i < TOTAL; i++){
        const x = randomNumBetween(0, canvasWidth)
        const y = randomNumBetween(0, canvasHeight)
        const radius = randomNumBetween(30, 80)
        const vy = randomNumBetween(1, 5)
        const particle = new Particle(x, y, radius, vy)
        particles.push(particle)
    }
}

const feGaussianBlur = document.querySelector('feGaussianBlur')
const feColorMatrix = document.querySelector('feColorMatrix')

const controls = new function(){
    this.blurValue = 40
    this.alphaChannel = 100
    this.alphaOffset = -30
    this.acc = 1.03
}

let gui = new dat.GUI()

const f1 = gui.addFolder('효과')
// f1.open()
f1.add(controls, 'blurValue', 0 , 100).onChange(value => {
    feGaussianBlur.setAttribute('stdDeviation', value)
})
f1.add(controls, 'alphaChannel', 0 , 100).onChange(value => {
    feGaussianBlur.setAttribute('values', `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${value} ${controls.alphaOffset}`)
})
f1.add(controls, 'alphaOffset', -100 , 100).onChange(value => {
    feGaussianBlur.setAttribute('values', `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${controls.alphaChannel} ${value}`)
})

const f2 = gui.addFolder("속도")

f2.add(controls, "acc", 1, 1.5, 0.01).onChange(value => {
    particles.forEach(particle => particle.acc = value)
})

// ctx.fillRect(10, 10, 50, 50) x,y,가로,세로(사각형)
// ctx.beginPath() path 시작
// ctx.arc(100, 100, 50, 0, Math.PI / 180 * 360) x, y, 반지름, 시작각도, 끝각도, 시계/반시계(생략가능 기본값 시계방향)
// ctx.fill()색상
// ctx.stroke() 선
// ctx.closePath() path 끝

class Particle {
    constructor(x, y, radius, vy){
        this.x = x
        this.y = y
        this.radius = radius
        this.vy = vy
        this.acc = 1.03
    }
    update(){
        this.vy *= this.acc
        this.y += this.vy
    }
    drow(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI / 180 * 360)
        ctx.fillStyle = '#a00c0d'
        ctx.fill()
        ctx.closePath()
    }
}

// const x = 100
// const y = 100
// const radius = 50
// const particle = new Particle(x,y,radius)
// const TOTAL = 20

const randomNumBetween = (min, max) => {
    return Math.random() * (max - min + 1) + min
}

// let particles = []
// for (let i = 0; i < TOTAL; i++){
//     const x = randomNumBetween(0, canvasWidth)
//     const y = randomNumBetween(0, canvasHeight)
//     const radius = randomNumBetween(30, 80)
//     const vy = randomNumBetween(1, 5)
//     const particle = new Particle(x, y, radius, vy)
//     particles.push(particle)
// }

// console.log(particles)

let interval = 1000 / 60 //60fps 타켓
let now, delta 
let then = Date.now() //초기화

function animate(){
    window.requestAnimationFrame(animate)
    now = Date.now()
    delta = now - then

    if (delta < interval) return

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    // x를 1px 이동시키기  fps : 초당 프레임 횟수
    // particle.y +=1
    // particle.drow()

    particles.forEach(particle => {
        particle.update()
        particle.drow()

        if(particle.y - particle.radius > canvasHeight){
            particle.y = -particle.radius
            particle.x = randomNumBetween(0, canvasWidth)
            particle.radius = randomNumBetween(50, 100)
            particle.vy = randomNumBetween(1, 5)
        }
    })

    then = now - (delta % interval)
}

// animate()
window.addEventListener('load', () => {
    init()
    animate()
})
window.addEventListener('resize', () => {
    init()
})