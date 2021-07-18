import * as workerTimers from 'worker-timers'

let startTimer
let running = false

let ws = '60'
let wm = '25'

let cycles = 0

const buttonRestart = document.createElement('button')
buttonRestart.setAttribute('id', 'btn-restart')
buttonRestart.setAttribute('class', 'btn-start')
buttonRestart.innerHTML = 'Retomar estudos'

const buttonPause = document.createElement('button')
buttonPause.setAttribute('id', 'btn-stop')
buttonPause.setAttribute('class', 'btn-stop')
buttonPause.innerHTML = 'Começar Pausa'

function startStudy() {

  if (cycles <= 4) {
    cycles++
  } else cycles = 0

  wm = 24

  if (!running) {
    startTimer = workerTimers.setInterval(timerPomodoro, 1000)
  }

  document.getElementById('start').remove()

  document.getElementById('container-pomodoro').appendChild(buttonPause)
}

buttonPause.onclick = () => {
  if (
    wm > 0 &&
    !window.confirm(
      'O tempo de estudo ainda não acabou. Tem certeza que gostaria de iniciar a pausa agora?'
    )
  ) {
    return
  } else {
    workerTimers.clearInterval(startTimer)

    if (cycles === 4) {
      ws = 60
      wm = 14

      window.alert(
        'Você completou quatro ciclos pomodoro. Parabéns! Agora sua pausa será merecidamente maior: 15 minutos.'
      )
      document.getElementById('w_minutes').innerText = '15'
      document.getElementById('w_seconds').innerText = '00'
    } else {
      ws = 60
      wm = 4

      document.getElementById('w_minutes').innerText = '05'
      document.getElementById('w_seconds').innerText = '00'
    }

    startTimer = workerTimers.setInterval(timerPomodoro, 1000)

    document.getElementById('btn-stop').remove()
    document.getElementById('container-pomodoro').appendChild(buttonRestart)
  }
}

buttonRestart.onclick = () => {
  if (
    wm > 0 &&
    !window.confirm(
      'O tempo de pausa ainda não acabou. Tem certeza que gostaria de retomar os estudos agora?'
    )
  ) {
    return
  } else {
    if (cycles <= 4) {
      cycles++
    } else cycles = 0

    workerTimers.clearInterval(startTimer)
    ws = 60
    wm = 24

    document.getElementById('w_minutes').innerText = '25'
    document.getElementById('w_seconds').innerText = '00'

    startTimer = workerTimers.setInterval(timerPomodoro, 1000)

    document.getElementById('btn-restart').remove()
    document.getElementById('container-pomodoro').appendChild(buttonPause)
  }
}

function timerPomodoro() {
  if (wm >= 0) {
    if (wm == 0 && ws == '00') {
      return
    } else ws--

    if (ws < 0) {
      ws = 59
      if (wm > 0) {
        wm--
      } else return
    }

    if (wm !== 0 && ws === '00') {
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
  } else if (wm === 0 && ws === 0) return
}

const pomodoro = { startStudy }
export default pomodoro
