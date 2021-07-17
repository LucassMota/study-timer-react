import React from 'react'
import { Link } from 'react-router-dom'
import pausa from './timer/tempo_pausado'
import estudo from './timer/tempo_estudado'
import { Helmet } from 'react-helmet'
import './App.css'

export default () => {
  return (
    <div>
      <Helmet>
        <style>{'html { background: rgba(255, 165, 0, 1); }'}</style>
      </Helmet>
      <h1 className='title'>Cronômetro de estudos</h1>
      <div
        id='pomodoro'
        className='pomodoro'
        onClick={() => {
          if (
            (estudo.tempoEstudado === '' && estudo.estudoIniciado === 1) ||
            pausa.pausaIniciada === 1
          ) {
            if (
              !window.confirm(
                'O cronômetro ainda está rodando. Certeza que você gostaria de sair da página?'
              )
            ) {
              return
            } else window.location.href = '/pomodoroRender'
          } else window.location.href = '/pomodoroRender'
        }}
      >
        Prefere Pomodoro
        {/* <Link to='/pomodoroRender'>Prefere Pomodoro?</Link> */}
      </div>
      <div className='container'>
        <div className='timer-study'>
          <h1>Começar a estudar</h1>
          <h1 id='counter'>00:00:00</h1>
          <div className='buttons-study'>
            <button
              className='button-start'
              id='comecar-estudo'
              onClick={() => estudo.IniciarEstudo()}
            >
              Iniciar
            </button>
            <button
              className='button-pause'
              id='pausar-estudo'
              onClick={() => estudo.botaoPausarEstudo()}
            >
              Pausar
            </button>
          </div>
        </div>
        <div className='timer-pause'>
          <h1>Fazer uma pausa</h1>
          <h1 id='counterPausa'>00:00:00</h1>
          <div className='buttons-pause'>
            <button
              className='button-start'
              id='comecar-pausa'
              onClick={() => pausa.iniciarPausa()}
            >
              Iniciar
            </button>
            <button
              className='button-finish'
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
