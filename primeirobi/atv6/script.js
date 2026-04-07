const input = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const lista = document.getElementById("lista");

// criar elemento de tarefa
function criarTarefa(texto) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = texto;

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "X";
  btnRemover.classList.add("remover");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnRemover);

  return li;
}

//adicionar tarefa
function adicionarTarefa() {
  const texto = input.value.trim();

  if (!texto) return;

  const tarefa = criarTarefa(texto);
  lista.appendChild(tarefa);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", adicionarTarefa);

// Marcar como concluída ou remover tarefa
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

lista.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.tagName === "INPUT") {
    li.classList.toggle("concluida");
  }

  if (e.target.classList.contains("remover")) {
    li.remove();
  }
});