'use strict'

export const getTodosCursos = async () => {
    const url = `http://localhost:8080/v1/projeto-usinagem/curso`
    const response = await fetch(url)
    const dado = await response.json()
    
    return dado
}

export const createCurso = async (aluno) => {
    const url = `http://localhost:8080/v1/projeto-usinagem/curso/`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( aluno )
    };

    fetch(url, options)
}

const curso = {
    "nome": "Sheldon",
    "carga_horaria": "120000",
    "descricao": "misto quente",
    "sigla": "SHELD",
    "foto": "https://i.pinimg.com/736x/79/30/58/793058e922d0754753e0ccd33265a5cd.jpg"
};

console.log(createCurso(curso));