'use strict'

import { createCurso, deleteCurso} from "../js/api/professor_curso.js";


const idCurso = localStorage.getItem('id')
console.log(idCurso);


export const createCardCurso = () => {

    document.getElementById("salvarBtn").addEventListener("click", () => {
        const nomeInput = document.getElementById("myInputNome");
        const siglaInput = document.getElementById("myInputSigla");
        const cargaHorariaInput = document.getElementById("myInputCargaHoraria");
        const urlInput = document.getElementById("myInputUrl");
        const descricaoInput = document.getElementById("myInputDescricao");
        const form = document.getElementById("modal__adicionar--content");

        if (form.checkValidity()) {
            const nome = nomeInput.value;
            const sigla = siglaInput.value;
            const cargaHoraria = cargaHorariaInput.value;
            const url = urlInput.value;
            const descricao = descricaoInput.value;

            const curso = {
                "nome": `${nome}`,
                "carga_horaria": `${cargaHoraria}`,
                "descricao": `${descricao}`,
                "sigla": `${sigla}`,
                "foto": `${url}`
            };

            console.log(curso);

            createCurso(curso)

        } else {
            console.log('campo não preeenchido');
        }



    })

}
export const deleteCardCurso = () => {
    //chamando o botão que vai deletar
    const deletarCardCurso = document.getElementById("Deletar");
    deletarCardCurso.addEventListener('click', () => {
        deleteCurso(idCurso)
        //console.log('aaa');
    })
}