const textoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

btnCriarTarefa.addEventListener('click', addLista);

function addLista(event) {
  event.preventDefault();

  const tarefas = document.createElement('li');
  tarefas.classList.add("lista");
  listaTarefas.appendChild(tarefas);
  tarefas.innerText = textoTarefa.value;

  if (textoTarefa.value.length !== 0) {
    textoTarefa.value = null;
    console.log(textoTarefa.value);

    tarefas.addEventListener('click', function corCinza(event) {
        event.target.style.backgroundColor = 'gray';
    });
  }
}
