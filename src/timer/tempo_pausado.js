// import React from 'react'
import estudo from './tempo_estudado'

// export default () => {
let horas = 0
let minutos = 0
let segundos = 0
let tempoPausa

let cronometroPausa

let pausaIniciada = 0 // se for igual a zero permite a inicialização do cronometro. Feito assim para não disparar a função "timer" mais de uma vez dentro da função "startCronometro"

let splitPausa
let splitPausaHoras = []
let splitPausaMinutos = []
let splitPausaSegundos = []

// const botaoIniciarPausa = (document.getElementById('comecar-pausa').onclick =
//   () => {
//     if (estudo.tempoEstudado === '' && estudo.estudoIniciado == 0) {
//       window.alert('Você precisa começar a estudar antes de tirar uma pausa!')
//     } else if (estudo.estudoIniciado == 1) return
//     else if (pausaIniciada === 0 && !estudo.estudoFinalizado)
//       startCronometroPausa()
//   })

// const botaoEncerrarPausa = (document.getElementById('acabar-pausa').onclick =
//   () => {
//     if (tempoPausa !== '' && tempoPausa !== '00:00:00') stopPausa()
//   })

const iniciarPausa = () => {
  if (estudo.tempoEstudado === '' && estudo.estudoIniciado === 0) {
    console.log(estudo.tempoEstudado, estudo.estudoIniciado)
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

  cronometroPausa = setInterval(() => {
    timerPausa()
  }, 1000)
}

function stopPausa() {
  pausaIniciada = 0
  pausa.pausaIniciada = 0

  clearInterval(cronometroPausa)

  horas = 0
  minutos = 0
  segundos = 0

  function anotaTempoParcialPausa() {
    if (tempoPausa !== null && tempoPausa !== undefined) {
      splitPausa = tempoPausa.split(':')
    } else return

    splitPausaHoras.push(splitPausa[0])
    splitPausaMinutos.push(splitPausa[1])
    splitPausaSegundos.push(splitPausa[2])

    if (splitPausaSegundos.length > 0) {
      let containerPausa = document
        .querySelector('.container-pausa')
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
  segundos++

  if (segundos === 60) {
    segundos = 0
    minutos++

    if (minutos === 60) {
      minutos = 0
      horas++
    }
  }

  let formatPausa =
    (horas < 10 ? '0' + horas : horas) +
    ':' +
    (minutos < 10 ? '0' + minutos : minutos) +
    ':' +
    (segundos < 10 ? '0' + segundos : segundos)

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
