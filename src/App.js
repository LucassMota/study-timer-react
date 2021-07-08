import React from 'react'
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import Main from './Main'
import PomodoroRender from './timer/pomodoro/pomodoroRender'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Main}></Route>
        <Route path='/PomodoroRender' component={PomodoroRender}></Route>
        <Redirect from='*' to='/' />
      </Switch>
    </>
  )
}

export default App
