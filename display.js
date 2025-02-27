// Open retirement calculator
function openRetCal() {
    const retirementCalcForm = document.getElementById("retirement-calc");
    retirementCalcForm.style.display = "block";

    openRetirementCalcDiv.style.display = "none"
}

const openRetirementCalcDiv = document.getElementById("openRetirementCal");
openRetirementCalcDiv.addEventListener("click", openRetCal);


// Open contract end date calculator
function openContcalc(){
    const contractEndDateCalcForm = document.getElementById("contractEndDate-calc");
    contractEndDateCalcForm.style.display = "block"

    openContractEndDateDiv.style.display = "none"
}

const openContractEndDateDiv = document.getElementById("openContractEndDateCalc");
openContractEndDateDiv.addEventListener("click", openContcalc);



