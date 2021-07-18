import React from 'react'
// import PomodoroStyle from './assets/pomodoroStyle.css'
import './assets/pomodoroStyle.css'
import pomodoro from './pomodoro'
import { Helmet } from 'react-helmet'

export default function PomodoroRender() {
  console.clear()
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
      <div id='container-pomodoro' className='container-pomodoro'>
        <div className='timer-pomodoro'>
          <h1 id='w_minutes'>25</h1>
          <h1 id='semicolon'>:</h1>
          <h1 id='w_seconds'>00</h1>
        </div>
        <button
          id='start'
          className='btn-start'
          onClick={() => pomodoro.startStudy()}
        >
          Começar!
        </button>
      </div>
    </div>
  )
}
