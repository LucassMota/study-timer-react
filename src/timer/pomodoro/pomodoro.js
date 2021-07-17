import * as workerTimers from 'worker-timers'

let startTimer
let running = false

const buttonRestart = document.createElement('button')
buttonRestart.setAttribute('id', 'btn-restart')
buttonRestart.setAttribute('class', 'btn-start')
buttonRestart.innerHTML = 'Retomar estudos'

const buttonPause = document.createElement('button')
buttonPause.setAttribute('id', 'btn-stop')
buttonPause.setAttribute('class', 'btn-stop')
buttonPause.innerHTML = 'Começar Pausa'

function startStudy() {
  // workerTimers.clearInterval(startTimer)

  if (!running) {
    startTimer = workerTimers.setInterval(timerPomodoro, 1000)
  }

  wm = 24

  document.getElementById('start').remove()

  document.getElementById('container').appendChild(buttonPause)
}

buttonPause.onclick = () => {
  if (
    !window.confirm(
      'O tempo de estudo ainda não acabou. Tem certeza que gostaria de iniciar a pausa agora?'
    )
  ) {
    return
  } else {
    workerTimers.clearInterval(startTimer)
    ws = 60
    wm = 4

    document.getElementById('w_minutes').innerText = '05'
    document.getElementById('w_seconds').innerText = '00'

    startTimer = workerTimers.setInterval(timerPomodoro, 1000)

    document.getElementById('btn-stop').remove()
    document.getElementById('container').appendChild(buttonRestart)
  }
  // }
}

buttonRestart.onclick = () => {
  if (
    !window.confirm(
      'O tempo de pausa ainda não acabou. Tem certeza que gostaria de retomar os estudos agora?'
    )
  ) {
    return
  } else {
    workerTimers.clearInterval(startTimer)
    ws = 60
    wm = 24

    document.getElementById('w_minutes').innerText = '25'
    document.getElementById('w_seconds').innerText = '00'

    startTimer = workerTimers.setInterval(timerPomodoro, 1000)

    document.getElementById('btn-restart').remove()
    document.getElementById('container').appendChild(buttonPause)
  }
  // }
}

let ws = '60'
let wm = '25'

function timerPomodoro() {
  if (wm > 0) {
    ws--

    if (ws < 1) {
      ws = '00'
      wm--
    }

    if (wm !== 0 && ws === '00') {
      ws = '00'
      ws = 59
    }

    if (wm === 0)
      document.getElementById('w_minutes', 'w_seconds').innerText = '00'

    if (ws >= 10) {
      document.getElementById('w_seconds').innerText = ws
    } else document.getElementById('w_seconds').innerText = '0' + ws

    if (wm >= 10) {
      document.getElementById('w_minutes').innerText = wm
    } else document.getElementById('w_minutes').innerText = '0' + wm
  } else return
}

const pomodoro = { startStudy }
export default pomodoro
