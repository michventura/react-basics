import React from 'react'
import {render} from 'react-dom'

function App({name = 'Mich'}) {
  return <p>Hola {name}</p>
}

const rootElement = document.getElementById('root')
render(<App name="Joe" />, rootElement)
