// Elementos HTML

taula = document.getElementById("taula_jugadors");
// Lista con los datos de los clientes
let LlistaJugadors = [];


function Afegir() {
    // Recull el valor
    let nom_jugador = document.getElementById('nom').value;
   
    // Afegeix el nom a l'array de jugadors
    LlistaJugadors.push(nom_jugador);
}

function rellenaTablaClientes() {
    taula.innerHTML = "";
    for (let jug of LlistaJugadors) {
        contenedor.innerHTML += `
            <tr>
                <td>${nom_jugador}</td>
            </tr>
        `;
    }
}

