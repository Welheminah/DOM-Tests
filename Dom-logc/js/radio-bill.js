var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

var callsTotals = 0;
var smsTotals = 0;

var instanceRadioBill = textBillTotals();

function textBillTotal(){
    
    var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtnElem){
    
        instanceRadioBill.radioBillTotal(checkedRadioBtnElem.value);
      
}

    callTotalTwoElem.innerHTML = instanceRadioBill.getCallsTotalCost().toFixed(2);
    smsTotalTwoElem.innerHTML = instanceRadioBill.getSmsesTotalCost().toFixed(2);
    totalTwoElem.innerHTML = instanceRadioBill.totalCostings().toFixed(2);

    totalTwoElem.classList.add(instanceRadioBill.totalClassName())

}

radioBillAddBtnElem.addEventListener('click', textBillTotal);