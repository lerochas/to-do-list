// A linha a seguir declara uma variável chamada "inputBox" e a atribui ao elemento HTML com o ID "input-box"
const inputBox = document.getElementById('input-box');
// A linha a seguir declara uma variável chamada "listContainer" e a atribui ao elemento HTML com o ID "list-container"
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert('Adicione uma tarefa');
    } else {
        // Cria um novo elemento <li> para representar a tarefa
        let li = document.createElement('li');
        // Define o conteúdo do elemento <li> como o valor da caixa de entrada
        li.innerHTML = inputBox.value;
        // Adiciona o elemento <li> à lista de tarefas (listContainer)
        listContainer.appendChild(li);
        // Cria um novo elemento <span> para representar o botão de exclusão da tarefa
        let span = document.createElement('span');
        // Define o conteúdo do elemento <span> como o caractere "×" (símbolo de multiplicação)
        span.innerHTML = '\u00d7';
        // Adiciona o elemento <span> como filho do elemento <li>
        li.appendChild(span);
    }
    // Limpa o valor da caixa de entrada após adicionar a tarefa
    inputBox.value = '';
    // Chama a função saveData() para salvar os dados atualizados da lista
    saveData();
}

// Adiciona um "ouvinte" de evento para o contêiner da lista (listContainer) que irá tratar cliques
listContainer.addEventListener('click', function(e){
    // Verifica se o elemento alvo do clique é uma tag <li>
    if(e.target.tagName === 'LI'){
        // Se for uma tag <li>, alterna a classe 'checked' para marcar/desmarcar a tarefa como concluída
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        // Se for uma tag <span>, remove o elemento pai (a tarefa) do DOM
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    // Armazena o conteúdo HTML do contêiner da lista (listContainer) no armazenamento local
    localStorage.setItem('data', listContainer.innerHTML);
}

// A função showTask() é definida para exibir as tarefas salvas previamente no carregamento da página
function showTask(){
    // Define o conteúdo HTML do contêiner da lista (listContainer) como o valor recuperado do armazenamento local com a chave 'data'
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();