import React from 'react'
import {render} from 'react-dom'

function App({name}) {
  return <p>Hola {name}</p>
}

const rootElement = document.getElementById('root')
render(<App name="Mich" />, rootElement)
