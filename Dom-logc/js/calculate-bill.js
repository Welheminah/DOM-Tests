
var calculateBtn = document.querySelector(".calculateBtn");

var billTotalElement = document.querySelector(".billTotal")

var billStringField = document.querySelector(".billString");


var billTotalSpanElement = document.querySelector(".total")
function calculateBtnClicked(){
    

    
    var roundedBillTotal = totalPhoneBill(billStringField.value);

    var currentTotal = Number(roundedBillTotal);

    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")
   


    if (currentTotal >= 30) {
        
        billTotalElement.classList.add("danger")
    } else if (currentTotal >= 20 && currentTotal < 30){
        
        billTotalElement.classList.add("warning")

    }
    
    billTotalElement.innerHTML = roundedBillTotal;

}


calculateBtn.addEventListener("click", calculateBtnClicked)
//link the function to a click event on the calculate button
