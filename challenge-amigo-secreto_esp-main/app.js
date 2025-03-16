// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombre
let amigoSecreto = [];

// Agrega un nombre al arreglo
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    // Valida si el campo esta vacio
    if (nombre === "") {
        alert("Debes ingresar un nombre");
        return;
    }

    // Agregar un nombre al arreglo
    amigoSecreto.push(nombre);

    // Mouestra la lista actualizada
    refreshList();

    // Limpia el campo luego de agregar nombre
    document.getElementById('amigo').value = "";
}

// Actualiza lista
function refreshList() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia lista antes de actualizar

    amigoSecreto.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Elegir un nombre, limpiar la lista y vaciar lista.
 function sortearAmigo() {
    console.log(amigoSecreto);

    if (amigoSecreto.length === 0) {
        alert("No se han agregado amigos para sortear.");
        return;
    }

    // Sortear un npombre al azar
    const amigoSorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
    document.getElementById('listaAmigos').innerHTML = "";

    // IMprime nombre sorteado
    document.getElementById('resultado').innerHTML = `<li>El Amigo Secreto sorteado: ${amigoSorteado}</li>`;

    // Vaciar lista
     amigoSecreto = [];
}
