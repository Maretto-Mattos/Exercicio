import { useState } from "react";


export function Exercicio1() {
    const listaCompras = [
        {
            id:1,
            nome:"Leite"
        },
        {
            id:2,
            nome:"Carne"
        },
        {
            id:3,
            nome:"Arroz"
        },
        {
            id:4,
            nome:"Feijão"
        },
    ];
    const [listaDeCompras, setListaDeCompras] = useState(listaCompras)
    const [novoItem, setNovoItem] = useState('')

    function AdicionarNaLista() {
        if (novoItem.trim !== '') {
            if ((listaDeCompras.some(item => item.nome.toLowerCase() === novoItem.toLowerCase())) !== true) {
                const InserirNovoItem = {
                    id: listaCompras.length + 1,
                    nome: novoItem,
                }
                setListaDeCompras([...listaDeCompras, InserirNovoItem])
                setNovoItem('')
            }
            else {
                alert(`O item '${novoItem}' já está na lista.`);
            }
        }
    }

    return (
        <>
            <h1>Lista de Compras:</h1>
            
            <div>
                <ul>
                {listaDeCompras.map((item) => (
                    <li key={item.id}>{item.nome}</li>
                ))}
                </ul>
                <input 
                placeholder="Digite um novo item para adicionar à lista de compras"
                type="text"
                value={novoItem}
                onChange={(e)=>{
                    setNovoItem(e.target.value)
                }}
                />
                <button onClick={AdicionarNaLista}>Adicionar</button>
            </div>
        </>

    )

}