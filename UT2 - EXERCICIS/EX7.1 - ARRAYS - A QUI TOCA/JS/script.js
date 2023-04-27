// *********  CREACIÓ DE LA VARIABLE DEL ARRAY *****
let LlistaJugadors = [];

// *************** FUNCIÓ BOTÓ AFEGIR ************

function AfegirJugador() {
    // AFEGINT EL NOU JUGADOR A LA LLISTA
    let jug = document.getElementById("camp_nom").value; 
    LlistaJugadors.push(jug);
    
    // 1.- AFEGIR NOU JUGADOR A LA LLISTA MOSTRADA
    document.getElementById("jugadors").innerHTML += `${jug}<br><br>`;

}

// ********** FUNCIÓ BOTÓ SEGÜENT **************

function NextPlayer() {
    // 1.- MOSTRA PER PANTALLA EL JUGADOR ACTUAL
    let jug_actual = LlistaJugadors[0];
    document.getElementById("jugador_actual").innerHTML = `${jug_actual}`;
    // 2.- EXTREURE EL JUGADOR QUE ESTAVA AL COMENÇAMENT
    let jug_anterior = LlistaJugadors.shift();
    // 3.- COLOCAR-LO AL FINAL DE LA LLISTA
    LlistaJugadors.push(jug_anterior);
    // 4.- ESBORRAR LA PANTALLA I EMPRAR BUCLE PER MOSTRAR TOTA LA LLISTA DE NOU
    document.getElementById("jugadors").innerHTML ="";
    for (let i=0; i<LlistaJugadors.length;i++) {
       document.getElementById("jugadors").innerHTML += `${LlistaJugadors[i]}<br><br>`;
    }
    
}


