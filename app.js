// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1) Array para almacenar los nombres de los amigos
let amigos = [];

// 2) Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById('amigo'); // Usamos el id real de tu input
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  actualizarLista();
}

// 3) Función para actualizar visualmente la lista de amigos
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiamos lista previa

  amigos.forEach(function (nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// 4) Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre antes de sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // Limpiamos resultados anteriores

  const li = document.createElement('li');
  li.innerHTML = `🎉 El amigo sorteado fue: <strong>${amigoSorteado}</strong>`;
  resultado.appendChild(li);
}
