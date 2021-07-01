import React from 'react'
import pausa from './timer/tempo_pausado'
import estudo from './timer/tempo_estudado'
import './App.css'

export default () => {
  //   let hh = 0
  //   let mm = 0
  //   let ss = 0
  //   let tempoEstudado = ''

  //   let splitEstudado
  //   let splitEstudadoHoras = []
  //   let splitEstudadoMinutos = []
  //   let splitEstudadoSegundos = []

  //   let cronometro
  //   let estudoIniciado = 0 // se for igual a zero permite a inicialização do cronometro. Feito assim para não disparar a função "timer" mais de uma vez dentro da função "startCronometro"

  //   let estudoFinalizado = false

  //   const IniciarEstudo = () => {
  //     if (pausa.pausaIniciada == 1) return
  //     if (estudoIniciado === 0 && !estudo.estudoFinalizado) startCronometro()
  //   }

  //   const botaoPausarEstudo = () => {
  //     if (tempoEstudado !== '' && tempoEstudado !== '00:00:00') pause()
  //   }

  //   function startCronometro() {
  //     estudoIniciado += 1
  //     estudo.estudoIniciado += 1

  //     cronometro = setInterval(() => {
  //       timer()
  //     }, 1000)
  //   }

  //   function timer() {
  //     ss++

  //     if (ss == 60) {
  //       ss = 0
  //       mm++

  //       if (mm == 60) {
  //         mm = 0
  //         hh++
  //       }
  //     }

  //     let format =
  //       (hh < 10 ? '0' + hh : hh) +
  //       ':' +
  //       (mm < 10 ? '0' + mm : mm) +
  //       ':' +
  //       (ss < 10 ? '0' + ss : ss)
  //     document.getElementById('counter').innerText = format

  //     tempoEstudado = format
  //   }

  //   function pause() {
  //     estudoIniciado = 0
  //     estudo.estudoIniciado = 0

  //     clearInterval(cronometro)
  //     hh = 0
  //     mm = 0
  //     ss = 0

  //     function anotaTempoParcial() {
  //       if (tempoEstudado !== null) {
  //         splitEstudado = tempoEstudado.split(':')
  //       } else return

  //       splitEstudadoHoras.push(splitEstudado[0])
  //       splitEstudadoMinutos.push(splitEstudado[1])
  //       splitEstudadoSegundos.push(splitEstudado[2])

  //       if (splitEstudadoSegundos.length > 0) {
  //         let containerEstudo = document
  //           .querySelector('.container-estudado')
  //           .insertAdjacentHTML(
  //             'beforeend',
  //             `<p> Tempo de estudo: ${tempoEstudado} </p>`
  //           )

  //         estudo.tempoEstudado = tempoEstudado

  //         tempoEstudado = '00:00:00'
  //       } else return
  //     }

  //     anotaTempoParcial()

  //     document.getElementById('counter').innerText = '00:00:00'
  //   }

  //   function finalizarEstudos() {
  //     let horasEstudadas = 0
  //     let minutosEstudados = 0
  //     let segundosEstudados = 0

  //     for (let i = 0; i < splitEstudadoHoras.length; i++) {
  //       Number(splitEstudadoHoras[i])
  //       horasEstudadas = horasEstudadas + Number(splitEstudadoHoras[i])
  //     }

  //     for (let i = 0; i < splitEstudadoMinutos.length; i++) {
  //       minutosEstudados = minutosEstudados + Number(splitEstudadoMinutos[i])
  //     }

  //     for (let i = 0; i < splitEstudadoSegundos.length; i++) {
  //       segundosEstudados = segundosEstudados + Number(splitEstudadoSegundos[i])
  //     }

  //     let converteHorasSegundosEstudados = horasEstudadas * 60 * 60
  //     let converteMinutosSegundosEstudados = minutosEstudados * 60
  //     let segundosTotaisEstudados = segundosEstudados
  //     let totalSegundosEstudados =
  //       converteHorasSegundosEstudados +
  //       converteMinutosSegundosEstudados +
  //       segundosTotaisEstudados

  //     let tempoTotalEstudado = new Date(totalSegundosEstudados * 1000)
  //       .toISOString()
  //       .substr(11, 8)

  //     let tempoFinalEstudado = document.getElementById('total-estudado')

  //     if (tempoEstudado != undefined && tempoEstudado === '00:00:00')
  //       tempoFinalEstudado.innerHTML = `Tempo total de estudo: ${tempoTotalEstudado}`

  //     if (tempoEstudado !== '') {
  //       estudo.estudoFinalizado = true

  //       function removeBotao() {
  //         const divBotao = document.getElementById('finalizar')
  //         return divBotao.remove()
  //       }
  //       removeBotao()
  //     }

  //     if (estudo.estudoFinalizado) {
  //       const botaoReiniciar = document.createElement('button')

  //       botaoReiniciar.innerHTML = 'Gostaria de reiniciar?'
  //       botaoReiniciar.classList.add('reiniciar')

  //       const divReiniciar = document.getElementById('total')

  //       divReiniciar.appendChild(botaoReiniciar)

  //       botaoReiniciar.onClick = () => {
  //         window.location.reload()
  //       }
  //     }
  //   }

  //   const botaoFinalizarEstudos = () => {
  //     fetch(true).then(finalizarEstudos()).then(pausa.finalizarPausa())
  //   }

  //   const estudo = {
  //     estudoIniciado,
  //     tempoEstudado,
  //     pause,
  //     finalizarEstudos,
  //     estudoFinalizado,
  //   }
  return (
    <div>
      <div className='titulo'>Cronômetro de estudos</div>
      <div className='container'>
        <div className='container-estudado'>
          <div className='max-width'>
            <h1>Começar a estudar</h1>
            <h1 id='counter'>00:00:00</h1>
            <button
              className='bg-green'
              id='comecar-estudo'
              onClick={() => estudo.IniciarEstudo()}
            >
              Iniciar
            </button>
            <button
              className='bg-yellow'
              id='pausar-estudo'
              onClick={() => estudo.botaoPausarEstudo()}
            >
              Pausar
            </button>
          </div>
        </div>
        <div className='container-pausa'>
          <div className='max-width'>
            <h1>Fazer uma pausa</h1>
            <h1 id='counterPausa'>00:00:00</h1>
            <button
              className='bg-green'
              id='comecar-pausa'
              onClick={() => pausa.iniciarPausa()}
            >
              Iniciar
            </button>
            <button
              className='bg-red'
              id='acabar-pausa'
              onClick={() => pausa.encerrarPausa()}
            >
              Parar
            </button>
          </div>
        </div>
      </div>
      <div className='total' id='total'>
        <button
          className='finalizar'
          id='finalizar'
          onClick={() => estudo.botaoFinalizarEstudos()}
        >
          Finalizar estudos
        </button>
        <p className='tempo-final-estudo' id='total-estudado'></p>
        <p className='tempo-final-pausa' id='total-pausa'></p>
      </div>
    </div>
  )
}
