import * as workerTimers from 'worker-timers'
import pausa from './tempo_pausado'

let tempoEstudado = ''

let splitEstudado
let splitEstudadoHoras = []
let splitEstudadoMinutos = []
let splitEstudadoSegundos = []

let cronometro
let estudoIniciado = 0 // se for igual a zero permite a inicialização do cronometro. Feito assim para não disparar a função "timer" mais de uma vez dentro da função "startCronometro"

let estudoFinalizado = false

let startTime
let currentTime

const IniciarEstudo = () => {
  if (pausa.pausaIniciada === 1) return
  if (estudoIniciado === 0 && !estudo.estudoFinalizado) startCronometro()
}

const botaoPausarEstudo = () => {
  if (tempoEstudado !== '' && tempoEstudado !== '00:00:00') pause()
}

function startCronometro() {
  estudoIniciado += 1
  estudo.estudoIniciado += 1

  startTime = new Date()

  cronometro = workerTimers.setInterval(timer, 1000)
}

function timer() {
  currentTime = new Date()
  let count = +currentTime - +startTime

  let s = Math.floor(count / 1000) % 60
  let m = Math.floor(count / 60000) % 60
  let h = Math.floor(count / 3600000) % 60

  let format =
    (h < 10 ? '0' + h : h) +
    ':' +
    (m < 10 ? '0' + m : m) +
    ':' +
    (s < 10 ? '0' + s : s)

  document.getElementById('counter').innerText = format
  tempoEstudado = format
}

function pause() {
  estudoIniciado = 0
  estudo.estudoIniciado = 0

  workerTimers.clearInterval(cronometro)

  function anotaTempoParcial() {
    if (tempoEstudado !== null) {
      splitEstudado = tempoEstudado.split(':')
    } else return

    splitEstudadoHoras.push(splitEstudado[0])
    splitEstudadoMinutos.push(splitEstudado[1])
    splitEstudadoSegundos.push(splitEstudado[2])

    if (splitEstudadoSegundos.length > 0) {
      let containerEstudo = document
        .querySelector('.timer-study')
        .insertAdjacentHTML(
          'beforeend',
          `<p> Tempo de estudo: ${tempoEstudado} </p>`
        )

      estudo.tempoEstudado = tempoEstudado

      tempoEstudado = '00:00:00'
    } else return
  }

  anotaTempoParcial()

  document.getElementById('counter').innerText = '00:00:00'
}

function finalizarEstudos() {
  let horasEstudadas = 0
  let minutosEstudados = 0
  let segundosEstudados = 0

  for (let i = 0; i < splitEstudadoHoras.length; i++) {
    Number(splitEstudadoHoras[i])
    horasEstudadas = horasEstudadas + Number(splitEstudadoHoras[i])
  }

  for (let i = 0; i < splitEstudadoMinutos.length; i++) {
    minutosEstudados = minutosEstudados + Number(splitEstudadoMinutos[i])
  }

  for (let i = 0; i < splitEstudadoSegundos.length; i++) {
    segundosEstudados = segundosEstudados + Number(splitEstudadoSegundos[i])
  }

  let converteHorasSegundosEstudados = horasEstudadas * 60 * 60
  let converteMinutosSegundosEstudados = minutosEstudados * 60
  let segundosTotaisEstudados = segundosEstudados
  let totalSegundosEstudados =
    converteHorasSegundosEstudados +
    converteMinutosSegundosEstudados +
    segundosTotaisEstudados

  let tempoTotalEstudado = new Date(totalSegundosEstudados * 1000)
    .toISOString()
    .substr(11, 8)

  let tempoFinalEstudado = document.getElementById('total-estudado')

  if (
    tempoEstudado !== '' &&
    estudoIniciado === 0 &&
    pausa.pausaIniciada === 0
  ) {
    tempoFinalEstudado.innerHTML = `Tempo total de estudo: ${tempoTotalEstudado}`
  }

  if (tempoEstudado !== '') {
    estudo.estudoFinalizado = true

    if (estudoIniciado === 0 && pausa.pausaIniciada === 0) {
      function removeBotao() {
        const divBotao = document.getElementById('finalizar')
        return divBotao.remove()
      }
      removeBotao()
    }
  }

  if (
    estudo.estudoFinalizado &&
    estudoIniciado === 0 &&
    pausa.pausaIniciada === 0
  ) {
    const botaoReiniciar = document.createElement('button')

    botaoReiniciar.innerHTML = 'Gostaria de reiniciar?'
    botaoReiniciar.classList.add('reiniciar')

    const divReiniciar = document.getElementById('total')

    divReiniciar.appendChild(botaoReiniciar)

    botaoReiniciar.onclick = () => {
      window.location.reload()
    }
  }
}

const botaoFinalizarEstudos = () => {
  fetch(true).then(finalizarEstudos()).then(pausa.finalizarPausa())
}

const estudo = {
  IniciarEstudo,
  cronometro,
  startCronometro,
  timer,
  botaoPausarEstudo,
  estudoIniciado,
  tempoEstudado,
  pause,
  finalizarEstudos,
  estudoFinalizado,
  botaoFinalizarEstudos,
}

export default estudo
