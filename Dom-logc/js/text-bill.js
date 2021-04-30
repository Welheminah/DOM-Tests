var billTypeTextElem = document.querySelector(".billTypeText");

var addToBillBtnElem = document.querySelector(".addToBillBtn");


var callTotalOneElem = document.querySelector(".callTotalOne");
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

var textInstance = textBillTotal()

function textBillsTotal(){

    textInstance.textBills(billTypeTextElem.value);
    
    callTotalOneElem.innerHTML = textInstance.getCallTotalCost().toFixed(2);
    smsTotalOneElem.innerHTML = textInstance.getSmsTotalCost().toFixed(2);
    totalOneElem.innerHTML = textInstance.smsCallTotal().toFixed(2);

 

    totalOneElem.classList.remove("danger")
    totalOneElem.classList.remove("warning")
    totalOneElem.classList.add(textInstance.totalClassName())

}

addToBillBtnElem.addEventListener('click', textBillsTotal);
 