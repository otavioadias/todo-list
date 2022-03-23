const textoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

btnCriarTarefa.addEventListener('click', addLista);

function addLista(event) {
  event.preventDefault();

  const criarLista = document.createElement('li');
  listaTarefas.appendChild(criarLista);
  criarLista.innerText = textoTarefa.value;
  if (textoTarefa.value.length !== 0) {
    textoTarefa.value = null;
    console.log(textoTarefa.value);
  }
}
