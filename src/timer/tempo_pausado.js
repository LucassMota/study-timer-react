import estudo from './tempo_estudado'
import * as workerTimers from 'worker-timers'

let tempoPausa

let cronometroPausa

let pausaIniciada = 0 // se for igual a zero permite a inicialização do cronometro. Feito assim para não disparar a função "timer" mais de uma vez dentro da função "startCronometro"

let splitPausa
let splitPausaHoras = []
let splitPausaMinutos = []
let splitPausaSegundos = []

let startPauseTime
let currentPauseTime

const iniciarPausa = () => {
  if (estudo.tempoEstudado === '' && estudo.estudoIniciado === 0) {
    window.alert('Você precisa começar a estudar antes de tirar uma pausa!')
  } else if (estudo.estudoIniciado === 1) return
  else if (pausaIniciada === 0 && !estudo.estudoFinalizado)
    startCronometroPausa()
}

const encerrarPausa = () => {
  if (tempoPausa !== '' && tempoPausa !== '00:00:00') stopPausa()
}

function startCronometroPausa() {
  pausaIniciada += 1
  pausa.pausaIniciada += 1

  startPauseTime = new Date()

  cronometroPausa = workerTimers.setInterval(timerPausa, 1000)
}

function stopPausa() {
  pausaIniciada = 0
  pausa.pausaIniciada = 0

  if (cronometroPausa !== undefined) workerTimers.clearInterval(cronometroPausa)

  function anotaTempoParcialPausa() {
    if (tempoPausa !== null && tempoPausa !== undefined) {
      splitPausa = tempoPausa.split(':')
    } else return

    splitPausaHoras.push(splitPausa[0])
    splitPausaMinutos.push(splitPausa[1])
    splitPausaSegundos.push(splitPausa[2])

    if (splitPausaSegundos.length > 0) {
      let containerPausa = document
        .querySelector('.timer-pause')
        .insertAdjacentHTML(
          'beforeend',
          `<p> Tempo de pausa: ${tempoPausa} </p>`
        )

      tempoPausa = '00:00:00'
    } else return
  }

  anotaTempoParcialPausa()

  document.getElementById('counterPausa').innerText = '00:00:00'
}

function timerPausa() {
  currentPauseTime = new Date()
  let countPause = +currentPauseTime - +startPauseTime

  let seconds = Math.floor(countPause / 1000) % 60
  let minutes = Math.floor(countPause / 60000) % 60
  let hours = Math.floor(countPause / 3600000) % 60

  let formatPausa =
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)

  document.getElementById('counterPausa').innerText = formatPausa

  tempoPausa = formatPausa
}

function finalizarPausa() {
  let horasPausa = 0
  let minutosPausa = 0
  let segundosPausa = 0

  for (let i = 0; i < splitPausaHoras.length; i++) {
    Number(splitPausaHoras[i])
    horasPausa = horasPausa + Number(splitPausaHoras[i])
  }

  for (let i = 0; i < splitPausaMinutos.length; i++) {
    minutosPausa = minutosPausa + Number(splitPausaMinutos[i])
  }

  for (let i = 0; i < splitPausaSegundos.length; i++) {
    segundosPausa = segundosPausa + Number(splitPausaSegundos[i])
  }

  let converteHorasSegundosPausa = horasPausa * 60 * 60
  let converteMinutosSegundosPausa = minutosPausa * 60
  let segundosTotaisPausa = segundosPausa
  let totalSegundosPausa =
    converteHorasSegundosPausa +
    converteMinutosSegundosPausa +
    segundosTotaisPausa

  let TempoTotalPausa = new Date(totalSegundosPausa * 1000)
    .toISOString()
    .substr(11, 8)

  let TempoFinalPausa = document.getElementById('total-pausa')

  if (tempoPausa !== undefined && tempoPausa === '00:00:00')
    TempoFinalPausa.innerHTML = `Tempo total de pausa: ${TempoTotalPausa}`
}

const pausa = {
  iniciarPausa,
  encerrarPausa,
  pausaIniciada,
  tempoPausa,
  stopPausa,
  finalizarPausa,
}

export default pausa
