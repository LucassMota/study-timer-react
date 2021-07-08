import React from 'react'
import { Link } from 'react-router-dom'
import pausa from './timer/tempo_pausado'
import estudo from './timer/tempo_estudado'
import './App.css'

export default () => {
  return (
    // <div>
    //   {/* <div className='titulo'>Cronômetro de estudos</div> */}
    //   <h1 className='titulo'>Cronômetro de estudos</h1>
    //   <Link to='/pomodoroRender'>Prefere Pomodoro?</Link>
    //   <div className='container'>
    //     <div className='container-estudado'>
    //       <div className='max-width'>
    //         <h1>Começar a estudar</h1>
    //         <h1 id='counter'>00:00:00</h1>
    //         <button
    //           className='bg-green'
    //           id='comecar-estudo'
    //           onClick={() => estudo.IniciarEstudo()}
    //         >
    //           Iniciar
    //         </button>
    //         <button
    //           className='bg-yellow'
    //           id='pausar-estudo'
    //           onClick={() => estudo.botaoPausarEstudo()}
    //         >
    //           Pausar
    //         </button>
    //       </div>
    //     </div>
    //     <div className='container-pausa'>
    //       <div className='max-width'>
    //         <h1>Fazer uma pausa</h1>
    //         <h1 id='counterPausa'>00:00:00</h1>
    //         <button
    //           className='bg-green'
    //           id='comecar-pausa'
    //           onClick={() => pausa.iniciarPausa()}
    //         >
    //           Iniciar
    //         </button>
    //         <button
    //           className='bg-red'
    //           id='acabar-pausa'
    //           onClick={() => pausa.encerrarPausa()}
    //         >
    //           Parar
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='total' id='total'>
    //     <button
    //       className='finalizar'
    //       id='finalizar'
    //       onClick={() => estudo.botaoFinalizarEstudos()}
    //     >
    //       Finalizar estudos
    //     </button>
    //     <p className='tempo-final-estudo' id='total-estudado'></p>
    //     <p className='tempo-final-pausa' id='total-pausa'></p>
    //   </div>
    // </div>

    // new layout

    <div>
      <h1 className='title'>Cronômetro de estudos</h1>
      <div className='pomodoro'>
        <Link to='/pomodoroRender'>Prefere Pomodoro?</Link>
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
