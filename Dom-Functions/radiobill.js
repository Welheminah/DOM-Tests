function textBillTotals(){

    var callsTotals = 0;
    var smsesTotals = 0;

    function radioBillTotal(checkedRadioBtnElem){
        if (checkedRadioBtnElem === "call"){
            callsTotals += 2.75;
        }
        else if (checkedRadioBtnElem === "sms"){
            smsesTotals += 0.75;
        }
        
    
}

function getCallsTotalCost(){
    return callsTotals;
}

function getSmsesTotalCost(){
    return smsesTotals;
}

function totalCostings(){
    return callsTotals + smsesTotals;
}

function totalClassName(){
    if(totalCostings() >= 30 && totalCostings() < 50){
        return "warning";
    } else if(totalCostings() >= 50){
        return "danger";
    }
}

return {
    getCallsTotalCost,
    getSmsesTotalCost,
    totalCostings,
    radioBillTotal,
    totalClassName
}

}