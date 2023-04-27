// *********  DECLARACIÓ DE LES VARIABLES *****

let PalabraGuiones;   // cadena de caracters tratada com ARRAY
var Array_PalabraGuiones = []; // cadena de caracters tratada com ARRAY
let PalabraSolucion;
var Array_PalabraSolucion = []; // cadena de caracters tratada com ARRAY

let ListaLetras = []; // Lletres dites per l'usuari 
let Diccionario = ["casa", "arbol", "medalla", "sol"];
var num_fallos = 0;
var num_aciertos = 0;

// *************** FUNCIÓ INICIALIZAR ************
function Inicializar() {

    num_fallos = 0;
    num_aciertos = 0;

    // ** Selecció de la paraula de manera aleatòria
    // Returns a random integer from 0 to 9:
    // Math.floor(Math.random() * 10); 10-> número de elementos
    let index = Math.floor(Math.random() * Diccionario.length);
    
    // Triem la paraula de l'array Diccionario
    PalabraSolucion = Diccionario[index];
   
    // Convertim cadena en ARRAY
    Array_PalabraSolucion = PalabraSolucion.split('');
        
    // *** BORRAR *********
    // Mostrem paraula a endevinar
    document.getElementById("solucion").innerHTML = `${PalabraSolucion}`;
    // ********************

    // ESBORREM LA PARAULA PER SI VENIM D'UNA ALTRA PARTIDA
        // document.getElementById("palabra").innerHTML = "";


    // *** Creem la paraula Array_PalabraGuiones ***
    let long = Array_PalabraSolucion.length;

    // alert(`La palabra solución tiene ${long} letras`);
    
    for (let i = 0; i< long; i++) {
        Array_PalabraGuiones[i] = '_';
        
        // La mostrem per pantalla
        document.getElementById("palabra").innerHTML += 
                                        `${Array_PalabraGuiones[i]} `;
    }  
    
    document.getElementById("letra").focus();
}


// *************** FUNCIÓ BOTÓ ENVIAR ************

function Enviar() {
    
    // 1.- LLEGIM LA LLETRA INTRODUÏDA PEL JUGADOR
    let acierto = false;
    let L = document.getElementById("letra").value; 
        
    // 2.- AFEGIM LA LLETRA A LA LLISTA PER PANTALLA
    document.getElementById("lista-letras").innerHTML +=`${L} <br>`;

    // 3.- COMPROVEM SI LA LLETRA ESTÀ A LA PARAULA PalabraSolucion
    //     I MODIFIQUEM Array_PalabraGuiones AMB LES LLETRES ENDEVINADES
   
    for (let i = 0; i<PalabraSolucion.length; i++) {
        // alert(`Letra analizada: ${Array_PalabraSolucion[i]}`);
        if (Array_PalabraSolucion[i] == L) {
            Array_PalabraGuiones[i] = L;
            acierto = true;
            num_aciertos++;
        } 
    }

    //  4.- INCREMENTEM EL NÚMERO D'ERRADES num_fallos
    //                O EL NÚMERO D'ENCERTS

    if (!acierto) {
        num_fallos++;
    } 
    
        
    // 5.- ESBORREM LA PARAULA 
    document.getElementById("palabra").innerHTML = "";
    
    // I LA MOSTREM PER PANTALLA MODIFICADA AMB LES LLETRES
    // amb espais entre les lletres    
    // Per afegir lletra per lletra hem d'emprar +=
    
    for (let j = 0; j<PalabraSolucion.length; j++) {
        document.getElementById("palabra").innerHTML += 
        `${Array_PalabraGuiones[j]} `;
    }
    
    // 6.- ESBORREM CAMP DE LA LLETRA
    // AL HTML HEM INCLÒS L'INPUT I EL BOTÓ A UN FORM
    // PER PODER EMPRAR EL MÈTODE RESET()
    
    const formu = document.getElementById("formulario");
    formu.reset();

    document.getElementById("letra").focus();

    // 7.- CANVIEM LA IMATGE MOSTRADA I ANEM AL FINAL SI ESCAU
    Dibujar(num_fallos, num_aciertos);
}

// *************** FUNCIÓ DIBUIXAR ************

function Dibujar(f,a) {
    let dib = document.getElementById("imagen");
    
    switch (f) {
        case 0: 
            dib.src = "./IMG/A0.png";
            break;
        
        case 1: 
            dib.src = "./IMG/A1.png";
            break;

        case 2: 
            dib.src = "./IMG/A2.png";
            break;
        
        case 3: 
            dib.src = "./IMG/A3.png";
            break;

        case 4: 
            dib.src = "./IMG/A4.png";
            break;

        case 5: 
            dib.src = "./IMG/A5.png";
            break;
        
        case 6: 
            dib.src = "./IMG/A6.png";
            break;    

        default: 
            dib.src = "./IMG/A7.png";
            break;   
        }
        
        // ********** DEFINICIÓ FINAL DEL JOC  ******************
        
        if (f >= 6) {
        // QUAN HA FALLAT I HA PERDUT EL JOC

            // ESBORREM I MOSTREM LA PARAULA RESOLTA
            document.getElementById("palabra").innerHTML = "";
            
            for (let j = 0; j<PalabraSolucion.length; j++) {
                document.getElementById("palabra").innerHTML += 
                `${Array_PalabraSolucion[j]} `;
            }
            
            // MOSTREM DIV FINAL AMB LA FRASE I EL BOTÓ 
            document.getElementById("frase-final-fallo").innerHTML =
                                  `HAS PERDIDO`;
            var x = document.getElementById("final_fallo");
            x.style.display = "block";

        // QUAN HA ENCERTAT LA PARAULA I HA GUANYAT
        } else if (a == PalabraSolucion.length) {
            document.getElementById("frase-final-acierto").innerHTML =
                                  `HAS GANADO EN ${f+a} INTENTOS`;
            var y = document.getElementById("final_acierto");
            y.style.display = "block";
        }
}