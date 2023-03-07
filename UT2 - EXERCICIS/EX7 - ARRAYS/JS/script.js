//CREACIÓ D'UN ARRAY

let medallas = ["oro","plata","bronce"];


// MOSTRANT EL ARRAY PER PANTALLA

let output = document.getElementById("sortida");

output.innerHTML+= `MOSTRANT L'ARRAY <br>`;
output.innerHTML+= `${medallas[0]} <br>`;
output.innerHTML+= `${medallas[1]} <br>`;
output.innerHTML+= `${medallas[2]} <br><br>`;

//MODIFICANT ELEMENTS 

medallas[0] = "gold";
medallas[1] = "silver";
medallas[2] = "bronze";

output.innerHTML+= `MOSTRANT L'ARRAY MODIFICAT<br>`;
output.innerHTML+= `${medallas[0]} <br>`;
output.innerHTML+= `${medallas[1]} <br>`;
output.innerHTML+= `${medallas[2]} <br>`;

//AFEGINT UN ELEMENT

medallas[3] = "iron";
medallas[7] = "copper";

// MOSTRAR ELEMENTS AMB FOR

// De principi a fi --> i++
output.innerHTML+= `<br>MOSTRANT L'ARRAY AMB UN FOR<br>`;
for (let i = 0;i<8;i++) {
    output.innerHTML+= `${medallas[i]} <br>`;
}

// De final a principi --> j--
output.innerHTML+= `<br>MOSTRANT L'ARRAY A L'INREVÉS AMB UN FOR<br>`;
for (let j = 7; j>=0; j--) {
    output.innerHTML+= `${medallas[j]} <br>`;
}

// MÉTODE LENGHT
// output.innerHTML+= `<br>TAMANY O LONGITUD D'UN ARRAY <br>`;
// output.innerHTML+= `L'array te ${medallas.length} elements <br>`;

// output.innerHTML+= `<br>EMPRANT VARIABLES PER MOSTRAR EL DARRER ELEMENT <br>`;
// let longitud = medallas.length;
// let darrer = longitud - 1;
// output.innerHTML+= `El darrer element introduit és ${medallas[darrer]}<br>`;

// output.innerHTML+= `<br>EMPRANT at PER MOSTRAR EL DARRER ELEMENT <br>`;
// output.innerHTML+= `El darrer element introduit és ${medallas.at(length-1)}<br>`;

// INTRODUCCIÓ A ELEMENTS COMPOSTOS

// let nombres = ["nom1", "nom2", "nom3", "nom4", "nom5"];
// let apellidos = ["ape1", "ape2", "ape3", "ape4", "ape5"];




