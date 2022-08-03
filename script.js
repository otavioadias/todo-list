const textoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnApagaCompletos = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const btnCima = document.querySelector('#mover-cima');
const btnBaixo = document.querySelector('#mover-baixo');
const btnRemoverSelecionado = document.querySelector('#remover-selecionado');

function removeSelected() {
  const tarefas = document.querySelectorAll('.lista');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
  }
}

function addEvento(li) {
  li.addEventListener('click', (event) => {
    removeSelected();
    event.target.classList.add('selected');
  });
}

function completed(li) {
  li.addEventListener('dblclick', (event) => {
    if (event.target.classList[1] === 'completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function addLista(event) {
  event.preventDefault();

  const tarefas = document.createElement('li');
  tarefas.classList.add('lista');
  listaTarefas.appendChild(tarefas);
  tarefas.innerText = textoTarefa.value;

  if (textoTarefa.value.length !== 0) {
    textoTarefa.value = null;
  } else if (textoTarefa.value.length === 0) {
    alert('Vazio!');
    listaTarefas.removeChild(tarefas);
  }
  addEvento(tarefas);
  completed(tarefas);
}

btnCriarTarefa.addEventListener('click', addLista);

btnApagaTudo.addEventListener('click', (event) => {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');
  for (let index = 0; index < tarefas.length; index += 1) {
    listaTarefas.removeChild(tarefas[index]);
  }
});

btnApagaCompletos.addEventListener('click', (event) => {
  event.preventDefault();
  const tarefaCompleta = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaCompleta.length; index += 1) {
    listaTarefas.removeChild(tarefaCompleta[index]);
  }
});

btnSalvar.addEventListener('click', (event) => {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');
  const arrayTarefas = [];
  for (let index = 0; index < tarefas.length; index += 1) {
    const objTarefa = {
      text: tarefas[index].innerHTML,
      class: tarefas[index].className,
    };
    arrayTarefas.push(objTarefa);
  }
  console.log(arrayTarefas);
  localStorage.setItem('tarefas', JSON.stringify(arrayTarefas));
});

function recarregar() {
  let localStorageTarefas = JSON.parse(localStorage.getItem('tarefas'));
  localStorageTarefas = localStorage.getItem('tarefas') !== null ? localStorageTarefas : [];

  for (let index = 0; index < localStorageTarefas.length; index += 1) {
    const tarefa = document.createElement('li');
    addEvento(tarefa);
    completed(tarefa);
    tarefa.innerHTML = localStorageTarefas[index].text;
    tarefa.className = localStorageTarefas[index].class;
    listaTarefas.appendChild(tarefa);
  }
}

window.onload = () => {
  recarregar();
};

function conditional(i) {
  const tarefas = document.querySelectorAll('.lista');
  if (i > 0) {
    listaTarefas.insertBefore(tarefas[i], listaTarefas.children[i - 1]);
  }
}

function subir(event) {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');

  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList[1] === 'selected' || tarefas[index].classList[2] === 'selected') {
      conditional(index);
    }
  }
}

btnCima.addEventListener('click', subir);

function conditionalDescer(i) {
  const tarefas = document.querySelectorAll('.lista');
  if ([i] < listaTarefas.children[i + 1]) {
    listaTarefas.insertBefore(tarefas[i], listaTarefas.children[i + 2]);
  }
}

function descer(event) {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');

  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList[1] === 'selected' || tarefas[index].classList[2] === 'selected') {
      conditionalDescer(index);
    }
  }
}

btnBaixo.addEventListener('click', descer);

function removerSelecionado(event) {
  event.preventDefault();
  const tarefas = document.querySelectorAll('.lista');

  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList[1] === 'selected') {
      listaTarefas.removeChild(tarefas[index]);
    }
  }
}

btnRemoverSelecionado.addEventListener('click', removerSelecionado);
