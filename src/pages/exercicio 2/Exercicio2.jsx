import React, { useState, useEffect } from 'react';

export function Exercicio2() {

    const [horario, setHorario] = useState(new Date())

  useEffect(() => {
    const IdHorario = setInterval(() => {
      setHorario(new Date())
    }, 1000)

    return () => clearInterval(IdHorario)
  }, [])

  return (
    <>
      <h2>Relógio:</h2>
      <h1>{horario.toLocaleTimeString()}</h1>
    </>
  )
}