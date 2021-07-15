import React from 'react'
// import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Main from './Main'
import PomodoroRender from './timer/pomodoro/pomodoroRender'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/PomodoroRender' component={PomodoroRender} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </>
  )
}

export default App
