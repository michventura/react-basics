import React from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  return <p>Hola {props.name}</p>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App name="Mich" />, rootElement)
