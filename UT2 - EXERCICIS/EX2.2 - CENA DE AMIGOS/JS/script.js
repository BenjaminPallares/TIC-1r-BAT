/*
* En una cena de amigos os llega la cuenta y queréis dividir entre todos. 
* ¿Cuánto os toca pagar a cada uno? (Redondea a dos decimales)
*/

function FuncionCalcula() {
    // Get the value of the input field with id="total"
    let x = document.getElementById("total").value;
    
    // Get the value of the input field with id="num_persones"
    let y = document.getElementById("num_persones").value;
    
    let result = x / y;
  
    document.getElementById("sortida").innerHTML = 
        "Heu de pagar " + result.toFixed(2) + " € per persona";
  }