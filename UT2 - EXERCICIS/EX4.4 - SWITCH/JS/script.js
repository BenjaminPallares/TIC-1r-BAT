function Calcula(op) {
   let x = document.getElementById("num1").value;
   x = parseInt(x);
   let y = document.getElementById("num2").value;
   y = parseInt(y);

   let result;
   switch (op) {
    case 1:
        result = x + y;
        document.getElementById("sortida").innerHTML = `SUMA: ${result}`;
        break;
    case 2:
        result = x - y;
        document.getElementById("sortida").innerHTML = `RESTA: ${result}`;
        break;
    case 3:
        result = x * y;
        document.getElementById("sortida").innerHTML = `PRODUCTE: ${result}`;
        break;
    case 4:
        result = x / y;
        document.getElementById("sortida").innerHTML = `QUOCIENT: ${result.toFixed(4)}`;
        break;

    }
}

function Esborra() {
    document.getElementById("sortida").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}