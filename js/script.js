// Adicionar id nos botoes de transação de 1 a 4
// Selecionar os botões
// Interceptar o evento de clique
// Recuperar o id adicionado

// Selecionando lista ul

const listaOpcoes = document.querySelector(".secaoTransacoes_lista")

// Adicionando escutador de eventos

listaOpcoes.addEventListener("click", indentificarOpcoes)

// Executando ação depois do clique

function indentificarOpcoes (event) {
    //  Identificando onde ocorreu o clique
    const elemento = event.target

    // Verificando se é um LI
    if(elemento.tagName == "LI"){
        // Recuperando o ID
        const id = elemento.id
        
        // Selecionando uma seção utilizando o ID (escolha do usuário)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
        
        // Remover classe mostrar antes de adicionar novamente
        removeClasseMostrar()
        // Adicionar uma classe
        secaoEscolha.classList.add("mostrar")
    }
    
}

// Função para remover as classes das divs

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .selecao_container div")
    for (let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}