const textoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnApagaCompletos = document.querySelector('#remover-finalizados'); 


function addLista(event) {
  event.preventDefault();

  const tarefa = document.createElement('li');
  tarefa.classList.add('lista');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = textoTarefa.value;

  if (textoTarefa.value.length !== 0) {
    textoTarefa.value = null;
  } else if (textoTarefa.value.length === 0) {
    alert('Vazio!');
    listaTarefas.removeChild(tarefa);
  }
  addEvento(tarefa);
  completed(tarefa);
}

btnCriarTarefa.addEventListener('click', addLista);

function removeSelected() {
  const tarefas = document.querySelectorAll('.lista');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
  }
}

function addEvento(li) {
  li.addEventListener('click', function (event) {
    if (event.target.classList[1] === 'selected') {
      event.target.classList.remove('selected');
    } else {
      removeSelected();
      event.target.classList.add('selected');
    }
  });
}

function removeCompleted() {
  const tarefas = document.querySelectorAll('.lista');
  tarefas.className.remove('completed');
}

function completed(li) {
  li.addEventListener('dblclick', function (event) {
    if (event.target.classList[1] === 'completed') {
      event.target.classList.remove('completed');
      console.log('clicou');
    } else  {
      event.target.classList.add('completed');      
    } 
  });
}

btnApagaTudo.addEventListener('click', function limpar(event) {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');
  for (let index = 0; index < tarefas.length; index += 1) {
    listaTarefas.removeChild(tarefas[index]);
  }
});

btnApagaCompletos.addEventListener('click', function completos(event) {
  event.preventDefault();
  const tarefaCompleta = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaCompleta.length; index += 1) {
    listaTarefas.removeChild(tarefaCompleta[index]);
  }
});