const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        resposta: [
            "let myVar;",
            "myVar = 10;",
            "var myVar;"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        resposta: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "O que o método `charAt()` faz em JavaScript?",
        resposta: [
            "Retorna o primeiro índice de um caractere especificado em uma string.",
            "Retorna o caractere na posição especificada em uma string.",
            "Remove espaços em branco de uma string."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método `push()` em um array em JavaScript?",
        resposta: [
            "Adiciona um elemento ao final do array.",
            "Remove um elemento do início do array.",
            "Reverte a ordem dos elementos no array."
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        resposta: [
            "function minhaFuncao() {}",
            "def minhaFuncao() {}",
            "void minhaFuncao() {}"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método `toFixed()` faz em JavaScript?",
        resposta: [
            "Retorna a parte inteira de um número.",
            "Retorna o número com um número específico de casas decimais.",
            "Arredonda um número para o inteiro mais próximo."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador de módulo (%) em JavaScript?",
        resposta: [
            "Retorna o quociente de uma divisão.",
            "Retorna o resto de uma divisão.",
            "Retorna o resultado de uma exponenciação."
        ],
        correta: 1
    },
    {
        pergunta: "O que o método `toUpperCase()` faz em JavaScript?",
        resposta: [
            "Converte uma string para minúsculas.",
            "Converte uma string para maiúsculas.",
            "Remove espaços em branco de uma string."
        ],
        correta: 1
    },
    {
        pergunta: "Como você comenta uma única linha de código em JavaScript?",
        resposta: [
            "// Este é um comentário de uma linha",
            "/* Este é um comentário de uma linha */",
            "<!-- Este é um comentário de uma linha -->"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de acessar o terceiro elemento de um array em JavaScript?",
        resposta: [
            "myArray[2]",
            "myArray[3]",
            "myArray.third()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }



    quizItem.querySelector('dl dt').remove()


    quiz.appendChild(quizItem)
    //coloca a pergunta na tela 
}