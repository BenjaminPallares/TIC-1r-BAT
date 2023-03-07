function Mostra_Taula() {
   let x = document.getElementById("num1").value;
   x = Number(x);
   // Esborrem la pantalla abans d'escriure
   document.getElementById("sortida").innerHTML = ""; 
   for (let i = 0; i<11; i++) {
    // Emprem += per afegir cada linia sense esborrar l'anterior
    document.getElementById("sortida").innerHTML += `${x} x ${i} = ${x * i} <br>`;
   }
}

