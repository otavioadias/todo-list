const textoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

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
      console.log(event.target.classList[0]);
    } else {
      removeSelected();
      event.target.classList.add('selected');
    }
  });
}
