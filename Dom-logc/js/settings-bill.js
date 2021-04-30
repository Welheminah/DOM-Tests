var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
var primaryElem = document.querySelector(".addBtn");

//Settings
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettingsElem = document.querySelector(".updateSettings");

var instanceSettingsBill = BillWithSettings();

function updateSetting(){
   instanceSettingsBill.setCallCost(Number(callCostSettingElem.value));
   instanceSettingsBill.setSmsCost(Number(smsCostSettingElem.value));
   instanceSettingsBill.setWarningLevel(warningLevelSettingElem.value);
instanceSettingsBill.setCriticalLevel(criticalLevelSettingElem.value);
   colorBehaviour();
instanceSettingsBill.getCallCost()

}

updateSettingsElem.addEventListener("click", updateSetting);


function billSettingTotal(){
   
    var check = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (check){

        instanceSettingsBill.radioType(check.value)
    }
    console.log( instanceSettingsBill.getTotalCallCost());

    callTotalSettingsElem.innerHTML = instanceSettingsBill.getTotalCallCost().toFixed(2);
    smsTotalSettingsElem.innerHTML = instanceSettingsBill.getTotalSmsCost().toFixed(2);
    totalSettingsElem.innerHTML = instanceSettingsBill.getTotalCost().toFixed(2);

     colorBehaviour();
}

 function colorBehaviour(){
         totalSettingsElem.classList.remove("danger")
         totalSettingsElem.classList.remove("warning")
        totalSettingsElem.classList.add(instanceSettingsBill.totalClassName())

 }

primaryElem.addEventListener("click", billSettingTotal);
