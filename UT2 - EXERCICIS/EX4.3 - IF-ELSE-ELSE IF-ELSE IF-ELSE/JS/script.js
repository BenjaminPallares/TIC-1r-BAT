function A_Lletra() {
    let result = document.getElementById("nota").value;
    if (result < 0) {
        console.log(`Nota invàlida: nombre negatiu`);
        document.getElementById("sortida").innerHTML = `Nota invàlida: nombre negatiu`;
    } else if (result < 5){
        console.log(`SUSPÈS`);
        document.getElementById("sortida").innerHTML = `SUSPÈS`;
    } else if (result < 6){
        console.log(`SUFICIENT`);
        document.getElementById("sortida").innerHTML = `SUFICIENT`;
    } else if (result < 7){
        console.log(`BÉ`);
        document.getElementById("sortida").innerHTML = `BÉ`;
    } else if (result < 9){
        console.log(`NOTABLE`);
        document.getElementById("sortida").innerHTML = `NOTABLE`;
    } else if (result <= 10){
        console.log(`EXCEL·LENT`);
        document.getElementById("sortida").innerHTML = `EXCEL·LENT`;
    } else {
        console.log(`Nota invàlida: T'has passat, no?`);
        document.getElementById("sortida").innerHTML = `Nota invàlida: T'has passat, no?`;
    }
}