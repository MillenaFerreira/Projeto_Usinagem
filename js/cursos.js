'use strict'

import { getTodosCursos } from "../js/api/professor_curso.js"

const cursos = await getTodosCursos()

console.log(cursos.cursos);

const criarTopo = () => {
    const containerTopo = document.createElement('span')
    containerTopo.classList.add('container_topo')

    const linha = document.createElement('div')
    linha.classList.add('linha')

    //dentro do containerTop
    const nome_button = document.createElement('div')
    nome_button.classList.add('nome_buttons')

    //dentro do nome_button terá: 
    const nome = document.createElement('p')
    nome.textContent = 'Cursos'

    const add_update_delete = document.createElement('div')
    add_update_delete.classList.add('adicionar_editar_deletar')

    //dentro do add_update_delete terá:
    const icon_add = document.createElement('button')
    icon_add.classList.add('fas')
    icon_add.classList.add('fa-plus')

    const icon_edit = document.createElement('button')
    icon_edit.classList.add('far')
    icon_edit.classList.add('fa-edit')

    const icon_delete = document.createElement('button')
    icon_delete.classList.add('fas')
    icon_delete.classList.add('fa-trash')

    

    containerTopo.append(nome_button, linha)
    nome_button.append(nome, add_update_delete)
    add_update_delete.append(icon_add, icon_edit, icon_delete)

    console.log('teste');
    return containerTopo
}

const criarCard = (curso) => {

    console.log('entrei no criar card');

    const card = document.createElement('div')
    card.classList.add('card_curso')
    
    //dentro do card_curso terá:
    const imagem = document.createElement('img')
    imagem.src = curso.foto

    const nome = document.createElement('div')
    nome.classList.add('nome')

    const carga_horaria = document.createElement('div')
    carga_horaria.classList.add('carga_horaria')

    //dentro do nome terá:
    const nomeSigla = document.createElement('h2')
    nomeSigla.textContent = curso.sigla

    const nomeCompleto = document.createElement('span')
    nomeCompleto.textContent = curso.nome


    //dentro da carga_horaria terá:
    const icone = document.createElement('i')
    icone.classList.add('fa-solid')
    icone.classList.add('fa-clock')

    const hora_curso = document.createElement('div')
    hora_curso.textContent = `${curso.carga_horaria}h`

    card.append(imagem, nome, carga_horaria)
    nome.append(nomeSigla, nomeCompleto)
    carga_horaria.append(icone, hora_curso)


    return card

}

export const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_cursos')
    const cardsJSON = cursos.cursos.map(criarCard)
    console.log(cards);

    cards.replaceChildren(...cardsJSON)
}

// export const carregarTopo = () => {
//     const cards = document.querySelector('.container-cursos')
//     const cardsJSON = cursos.cursos.map(criarTopo)
//     console.log(cards);

//     cards.replaceChildren(...cardsJSON)
// }
// criarTopo()

//carregarCard()