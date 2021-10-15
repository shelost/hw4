let canvas = Id('canvas')
let ctx = canvas.getContext('2d')
let bg = Id('background')

let CanvasLoop = () => {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    switch (int){
        case 0:
            document.body.style.background = 'black'
            break;
        case 1:
            document.body.style.background = '#0074ff'
            break;
        case 2:
            document.body.style.background = '#aa00ff'
            break;
        default:
            break;
    }

    window.requestAnimationFrame(CanvasLoop)
}
window.requestAnimationFrame(CanvasLoop)