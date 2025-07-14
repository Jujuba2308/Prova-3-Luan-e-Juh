// Array para armazenar os personagens
let personagens = [];

// Referências aos elementos
const inputNome = document.getElementById("nome");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaPersonagens");

// Função para adicionar personagem
function adicionarPersonagem() {
  const nome = inputNome.value.trim();

  if (nome !== "") {
    personagens.push(nome); // Uso de array + push
    atualizarLista();
    inputNome.value = "";
  } else {
    alert("Digite um nome válido.");
  }
}

// Função para atualizar a lista na tela
function atualizarLista() {
  lista.innerHTML = ""; // Limpa a lista
  personagens.forEach(function(personagem) {
    const li = document.createElement("li");
    li.textContent = personagem;
    lista.appendChild(li); // Inserção dinâmica
  });
}

// Uso de addEventListener
btnAdicionar.addEventListener("click", adicionarPersonagem);