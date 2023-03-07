function FuncioValida() {
    let result = document.getElementById("nota").value;
    if (result < 0) {
        console.log(`Nota invàlida: nombre negatiu`);
        document.getElementById("sortida").innerHTML = `Nota invàlida: nombre negatiu`;
    } else if (result <= 10){
        console.log(`Nota correcta`);
        document.getElementById("sortida").innerHTML = `Nota correcta`;
    } else {
        console.log(`Nota invàlida: T'has passat un poc, no?`);
        document.getElementById("sortida").innerHTML = `T'has passat un poc, no?`;
    }
}