import React from 'react'
import {render} from 'react-dom'
import './style.css'

const App = ({name = 'Mich'}) => (
  <>
    <p className="saludo">Hola {name}</p>
  </>
)

const rootElement = document.getElementById('root')
render(<App />, rootElement)
