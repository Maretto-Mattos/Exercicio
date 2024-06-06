import { Botao } from "../../components/Button/Button";
import { Entrada } from "../../components/Imput/Imput";
import { useState } from "react";

export function Exercicio3() {

    const [inputValor, setInputValor] = useState('')

    function imprimir(conteudo) {
        if (conteudo !== '') {
            console.log(conteudo)
        } else {
            alert("O campo está vazio!")
        }
    }

    function handleClick() {
        imprimir(inputValor)
    }

    return (
        <>
          <h1>Formulário</h1>
            <Entrada 
              type="text" 
              placeholder="Nome"
              value={inputValor} 
              onChange={(e) => 
                setInputValor(e.target.value)} 
            />
            <Botao valor="enviar" onclick={handleClick}/>
        </>
    )
}