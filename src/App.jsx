import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Exercicio1 } from './pages/exercicio 1/Exercicio1'
import { Exercicio2 } from './pages/exercicio 2/Exercicio2'
import { Exercicio3 } from './pages/exercicio 3/Exercicio3'
import { Exercicio4 } from './pages/exercicio 4/Exercicio4'

function App() {

  return (
    <>
      <Exercicio1/>
      <Exercicio2/>
      <Exercicio3/>
      <Exercicio4/>
    </>
  )
}

export default App
