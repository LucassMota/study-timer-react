let wm = document.getElementById('w_minutes')
let ws = document.getElementById('w_seconds')

let bm = document.getElementById('b_minutes')
let bs = document.getElementById('b_seconds')

let startTimer

function start() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
  } else {
    alert('Timer is already running')
  }
}

function reset() {
  document.getElementById('w_minutes').innerText = 25
  document.getElementById('w_seconds').innerText = '00'

  document.getElementById('b_minutes').innerText = 5
  document.getElementById('b_seconds').innerText = '00'

  document.getElementById('counter').innerText = 0
  stopInterval()
  startTimer = undefined
}

function stop() {
  stopInterval()
  startTimer = undefined
}

//Start Timer Function
function timer() {
  //Work Timer Countdown
  if (document.getElementById('w_seconds').innerText != 0) {
    document.getElementById('w_seconds').innerText--
  } else if (
    document.getElementById('w_minutes').innerText != 0 &&
    document.getElementById('w_seconds').innerText == 0
  ) {
    document.getElementById('w_seconds').innerText = 59
    document.getElementById('w_minutes').innerText--
  }

  //Break Timer Countdown
  if (
    document.getElementById('w_minutes').innerText == 0 &&
    document.getElementById('w_seconds').innerText == 0
  ) {
    if (document.getElementById('b_seconds').innerText != 0) {
      document.getElementById('b_seconds').innerText--
    } else if (
      document.getElementById('b_minutes').innerText != 0 &&
      document.getElementById('b_seconds').innerText == 0
    ) {
      document.getElementById('b_seconds').innerText = 59
      document.getElementById('b_minutes').innerText--
    }
  }

  if (
    document.getElementById('w_minutes').innerText == 0 &&
    document.getElementById('w_seconds').innerText == 0 &&
    document.getElementById('b_minutes').innerText == 0 &&
    document.getElementById('b_seconds').innerText == 0
  ) {
    document.getElementById('w_minutes').innerText = 25
    document.getElementById('w_seconds').innerText = '00'

    document.getElementById('b_minutes').innerText = 5
    document.getElementById('b_seconds').innerText = '00'

    document.getElementById('counter').innerText++
  }
}

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer)
}

const pomodoro = { start, reset, stop }

export default pomodoro
