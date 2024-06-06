import React, { useState, useEffect } from "react";

export function Exercicio4() {
    const itensIniciais = [
        { id: 1, nome: 'Lacre Sombrio' },
        { id: 2, nome: 'Crepúsculo de Draktharr' },
        { id: 3, nome: 'Capuz da Morte de Rabadon' },
        { id: 4, nome: 'Mandato Imperial' },
        { id: 5, nome: 'Égide de Fogo Solar' },
        { id: 6, nome: 'Lâmina da Fúria de Guinsoo' },
        { id: 7, nome: 'Força da Trindade' },
    ]

    const [listaDeItens, setListaDeItens] = useState(itensIniciais)
    const [listaDeItensFiltro, setListaDeItensFiltro] = useState(itensIniciais)
    const [itemPesquisa, setItemPesquisa] = useState('')

    useEffect(() => {
        if (itemPesquisa.trim() !== '') {
            const itensFiltrados = listaDeItens.filter(item =>
                item.nome.toLowerCase().includes(itemPesquisa.toLowerCase())
            )
            setListaDeItensFiltro(itensFiltrados)
        } else {
            setListaDeItensFiltro(listaDeItens)
        }
    }, [itemPesquisa, listaDeItens])

    return (
        <>
            <h1>Lista de Itens:</h1>
            <div>
                <ul>
                    {listaDeItensFiltro.map((item) => (
                        <li key={item.id}>{item.nome}</li>
                    ))}
                </ul>
                <input
                    placeholder="Pesquisar Item"
                    type="text"
                    value={itemPesquisa}
                    onChange={(e) => {
                        setItemPesquisa(e.target.value)
                    }}
                />
            </div>
        </>
    )
}
