import React from 'react'
import {render} from 'react-dom'

const App = ({name}) => (
  <>
    <p>Hola {name}</p>
  </>
)

const rootElement = document.getElementById('root')
render(<App name="Joe" />, rootElement)
