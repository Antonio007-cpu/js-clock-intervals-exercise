let segundos=0
let minutos=0
let horas=0

const secHand=document.getElementById('second')
const minHand=document.getElementById('minute')
const hourHand=document.getElementById('hour')

const Degrees = (up, tick) =>{
    return (up / tick) *360
}

const clockMove =() => {
    segundos++
    const segundosDegrees = Degrees(segundos,60)
    secHand.style.transform = `rotate(${segundosDegrees})`
    if ((segundos %60)==0){
        minutos++
        const minutosDegrees = Degrees(minutos,60)
        minHand.style.transform = `rotate(${minutosDegrees})`
    }
    if ((segundos % 3600) == 0){
        horas++
        const horasDegrees = Degrees(horas,12)
        hourHand.style.transform = `rotate(${horasDegrees})`
    }
}

const seconds = setInterval(clockMove, 5)