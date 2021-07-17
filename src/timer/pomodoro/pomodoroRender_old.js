import React from 'react'
import PomodoroStyle from './assets/pomodoroStyle.css'
import pomodoro from './pomodoro'
import { Helmet } from 'react-helmet'

export default function PomodoroRender() {
  // console.clear()
  return (
    <div>
      <Helmet>
        <style>
          {
            'body { background: linear-gradient(180deg,rgba(35,102,22,1) 0%,rgba(255,81,50,1) 86%); }'
            // 'html {background: rgba(255,99,71,1); }')
          }
        </style>
      </Helmet>
      <h1 className='pomodoro-title'>Pomodoro</h1>
      <div className='container'>
        <div id='container'>
          <p id='work' className='label'>
            Estudar:
          </p>
          <p id='break' className='label'>
            Pausa:
          </p>
          <p id='cycles' className='label'>
            Ciclos:
          </p>

          {/* Work Timer */}
          <div id='work-timer' className='timer'>
            <p id='w_minutes'>25</p>
            <p className='semicolon'>:</p>
            <p id='w_seconds'>00</p>
          </div>

          {/* Cycle Counter */}
          <p id='counter' className='timer'>
            0
          </p>

          {/* Break Timer */}
          <div id='break-timer' className='timer'>
            <p id='b_minutes'>05</p>
            <p className='semicolon'>:</p>
            <p id='b_seconds'>00</p>
          </div>
          <button
            id='start'
            className='btn-start'
            onClick={() => pomodoro.start()}
          >
            Começar
          </button>
          <button
            id='stop'
            className='btn-stop'
            onClick={() => pomodoro.stop()}
          >
            Pausar
          </button>
          <button
            id='reset'
            className='btn-reset'
            onClick={() => pomodoro.reset()}
          >
            Resetar
          </button>
        </div>
      </div>
    </div>
  )
}
