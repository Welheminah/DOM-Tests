function textBillTotal(){
    var callsTotal = 0;
    var smsTotal = 0;

    // var totalCost = callsTotal + smsTotal;
    
    function textBills(billTypeEntered){
    // var billTypeEntered = billTypeEntered.value.trim();
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    }

    function getCallTotalCost(){
        return callsTotal;
    }

    function getSmsTotalCost(){
        return smsTotal;
    }

    function smsCallTotal(){
        return callsTotal + smsTotal;
    }

    

    function totalClassName(){
        if(smsCallTotal() >= 30 && smsCallTotal() < 50){
            return "warning";
        } else if(smsCallTotal() >= 50){
            return "critical";
        }
    }



    return {
        textBills,
        getCallTotalCost,
        getSmsTotalCost,
        smsCallTotal,
        totalClassName

    }
    
}
