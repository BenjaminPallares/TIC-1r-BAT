// *********  DECLARACIÓ DE LES VARIABLES *****

let PalabraGuiones;   // cadena de caracters tratada com ARRAY
let Array_PalabraGuiones = []; // cadena de caracters tratada com ARRAY
let PalabraSolucion;
let Array_PalabraSolucion = []; // cadena de caracters tratada com ARRAY

let ListaLetras = []; // Lletres dites per l'usuari 
let Diccionario = ["casa", "arbol", "medalla", "sol"];

// *************** FUNCIÓ INICIALIZAR ************

function Inicializar() {

    // ** Selecció de la paraula de manera aleatòria
    // Returns a random integer from 0 to 9:
    // Math.floor(Math.random() * 10); 10-> número de elementos
    let index = Math.floor(Math.random() * 4);

    // DE MANERA MÁS GENÉRICA
    // let index = Math.floor(Math.random() * Diccionario.length);
    
    // Asignem a PalabraSolucion la paraula que està
    // a la posició que indica la variable index a l'array Diccionario

    // Convertim cadena en ARRAY
    Array_PalabraSolucion = PalabraSolucion.split('');
        
    // *** BORRAR *********
    // Mostrem paraula a endevinar
    document.getElementById("solucion").innerHTML = `${PalabraSolucion}`;
    // ********************

    let long = Array_PalabraSolucion.length;
     
    // Creem la paraula Array_PalabraGuiones
    
    for (let i=0; i<long; i++) {
        Array_PalabraGuiones[i] = '_';
        
        // La mostrem per pantalla
        document.getElementById("palabra").innerHTML += 
        `${Array_PalabraGuiones[i]} `;
    }
}


// *************** FUNCIÓ BOTÓ ENVIAR ************

function Enviar() {
   
    // 1.- LLEGIM LA LLETRA INTRODUÏDA PEL JUGADOR
    let letra;
    letra = document.getElementById("letra").value;

    // 2.- AFEGIM LA LLETRA A LA LLISTA PER PANTALLA
    
    // 3.- a)COMPROVEM SI LA LLETRA ESTÀ A LA PARAULA PalabraSolucion
    //         i MODIFIQUEM Array_PalabraGuiones AMB LES LLETRES ENDEVINADES
    //     b) ** DARRERA PART *** COMPROVEM SI HA FALLAT I CRIDEM A LA FUNCIÓ Dibiuxar()
   
    // 4.- ESBORREM LA PARAULA 

    // I LA MOSTREM PER PANTALLA MODIFICADA AMB LES LLETRES
    // amb espais entre les lletres
    
    // Per afegir lletra per lletra hem d'emprar +=
    

    // 5.- ESBORREM CAMP DE LA LLETRA

    
    // 6.- ESBORREM CAMP DE LA LLETRA
    // AL HTML HEM INCLÒS L'INPUT I EL BOTÓ A UN FORM
    // PER PODER EMPRAR EL MÈTODE RESET()

    // 7.- CANVIEM LA IMATGE MOSTRADA I ANEM AL FINAL SI ESCAU




   
}
