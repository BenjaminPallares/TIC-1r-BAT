function Init_Mitjana() {
   let x = document.getElementById("num1").value;
   x = Number(x);
   let y = document.getElementById("num2").value;
   y = Number(y);

   let result = Mitjana(x,y);
   
   document.getElementById("sortida").innerHTML = `MITJANA: ${result}`;
}

function Mitjana (num1, num2) {
    return ((num1 + num2) / 2);
}

function Init_Maxim() {
    let x = document.getElementById("num1").value;
    x = Number(x);
    let y = document.getElementById("num2").value;
    y = Number(y);
 
    let result = Maxim(x,y);
    
    document.getElementById("sortida").innerHTML = `MÀXIM: ${result}`;
}

function Maxim (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}