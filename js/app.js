const bracketOne = [0,1,2,3]
const bracketTwo = [4,5,6,7,8,9,10,11,12]
const bracketThree = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
const bracketValue = Number(document.getElementById("age").value);

function tickets() {
    if (bracketValue === bracketOne){
        document.getElementById("ticketResult").innerHTML = document.getElementById("name").value + ", your ticket is free!"
    }
    else if (bracketValue === bracketTwo){
        document.getElementById("ticketResult").innerHTML = document.getElementById("name").value + ", your ticket costs $10."
    }
    else if (bracketValue === bracketThree){
        document.getElementById("ticketResult").innerHTML = document.getElementById("name").value + ", your ticket costs $20."  
    }
    else if (bracketValue > bracketThree) {
        document.getElementById("ticketResult").innerHTML = document.getElementById("name").value + ", your ticket costs $12."
    }
    else {
        document.getElementById("ticketResult").innerHTML = "Please insert an acceptable value."
    }
}

document.getElementById("submit").addEventListener("click", tickets); 