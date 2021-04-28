function totalPhoneBill(billString){
    
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    function billCalculate(billString){
    var billItems = billString.split(",");
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    }
function getTotalCost(){
    return billTotal;
}


return {
    billCalculate,
    getTotalCost
}
}    