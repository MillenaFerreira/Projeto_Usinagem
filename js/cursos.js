'use strict'

import { getTodosCursos } from "../js/api/professor_curso.js"

const cursos = await getTodosCursos()

//console.log(cursos.cursos);


const criarCard = (curso) => {

    //console.log('entrei no criar card');

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

    card.addEventListener('click', function(){
        localStorage.setItem('id', curso.id)
        console.log(curso.id);
    })

    card.append(imagem, nome, carga_horaria)
    nome.append(nomeSigla, nomeCompleto)
    carga_horaria.append(icone, hora_curso)


    return card

}

export const carregarCardCursos = () => {
    const cards = document.querySelector('.cards_cursos')
    const cardsJSON = cursos.cursos.map(criarCard)
    //console.log(cards);

    cards.replaceChildren(...cardsJSON)
}

//carregarCard()