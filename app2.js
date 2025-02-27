// Calculate the period in contract in years, months and days
function calculatePeriodInContract(event) {
    event.preventDefault() // To avoid default form submission

    const dobInput = document.getElementById("inputDateob").value;

    const dob = new Date(dobInput);
    const currentDate = new Date();

    let diff = new Date(currentDate.getTime() - dob.getTime());

    let ageInYrs = diff.getUTCFullYear() - 1970; // Gives difference as year

    let ageInMonths = diff.getUTCMonth(); // Gives month count of difference

    let ageIndays = diff.getUTCDate() - 1; // Gives day count of difference

    const showAgeInYrs = document.getElementById("periodInYrs");
    const showAgeInMonths = document.getElementById("periodInMonths");
    const showAgeIndays = document.getElementById("periodIndays");

    showAgeInYrs.value = ageInYrs + " yrs";
    showAgeInMonths.value = ageInMonths + " mnths";
    showAgeIndays.value = ageIndays + " days";
};

const calcPerInContBtn = document.getElementById("calcPerInCont");

calcPerInContBtn.addEventListener("click", calculatePeriodInContract);

// Calculate contract end date
function calculateContractEndDate(event) {

    event.preventDefault() // To avoid default form submission

    const csdInput = document.getElementById("inputDateob").value;
    const contractLength = document.getElementById("periodOfContract").value;

    if(contractLength===""){
        const errorMessagep = document.getElementById("errorMessageContract");
        errorMessagep.innerHTML = "Length of contract is required! fill the above field";
        errorMessagep.style.display= "block";
        return
    }
    const errorMessagep = document.getElementById("errorMessageContract");
    errorMessagep.style.display= "none";


    const dob = new Date(csdInput);
    const aor = parseInt(contractLength);


    let dor = new Date(dob.getFullYear() + aor, dob.getMonth(), dob.getDate());

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    var formattedDate = dor.toLocaleDateString(undefined, options);

    const formatteddor = document.getElementById("cedPopulate");

    formatteddor.value = formattedDate;
}

let contEndDateCalcBtn = document.getElementById("calcCed");

contEndDateCalcBtn.addEventListener("click", calculateContractEndDate);


// Function that calculates the remaining period in an employment
// That is period remaining under contract
function calculateRemainingContractPeriod(event) {

    event.preventDefault() // To avoid default form submission

    const cedCalculated = document.getElementById("cedPopulate").value;
    

    if(cedCalculated===""){
        const errorMessagepContract2 = document.getElementById("errorMessageContract2");
        errorMessagepContract2.innerHTML = "Contract end date is required! calculate date of retirement first";
        errorMessagepContract2.style.display= "block";
        return
    }

    const errorMessagepContract2 = document.getElementById("errorMessageContract2");
    errorMessagepContract2.style.display= "none";


    const dorCalculatedFormat = new Date(cedCalculated);
    const currentDate = new Date();

    if(currentDate>dorCalculatedFormat){
        const errorMessageContract3 = document.getElementById("errorMessageContract3");
        errorMessageContract3.innerHTML = "The customer's contract has ended! Check the contract start date and the length of contract field to continue."
        errorMessageContract3.style.display= "block"
        return
    }

    const errorMessageContract3 = document.getElementById("errorMessageContract3");
    errorMessageContract3.style.display="none";

    let allyrs = dorCalculatedFormat.getFullYear() - currentDate.getFullYear();

    let allMonths= dorCalculatedFormat.getMonth() - currentDate.getMonth() + (12 * (dorCalculatedFormat.getFullYear() - currentDate.getFullYear()));


    const allyrsCalculated = document.getElementById("totaltyrs");
    const allMonthsCalculated = document.getElementById("totalmonths")

    allyrsCalculated.value = allyrs + " in yrs."
    allMonthsCalculated.value = allMonths + " in mnths"
}

let calcContractRemainingPeriodBtn = document.getElementById("calcContractRemainingPeriod");

calcContractRemainingPeriodBtn.addEventListener("click", calculateRemainingContractPeriod);


// Calculate remaining months for calculation
function calculateNumberOfMonthsForCalculation(event) {

    event.preventDefault() // To avoid default form submission

    const dorCalculated = document.getElementById("cedPopulate").value;
    const NumberOfMonthsDeducted = document.getElementById("NumberOfMonthsDeducted").value

    if(dorCalculated===""){
        const errorMessagep2 = document.getElementById("errorMessageContract4");
        errorMessagep2.innerHTML = "Contract end date is required! calculate contract end date first";
        errorMessagep2.style.display= "block";
        return
    }

    const errorMessagep2 = document.getElementById("errorMessageContract4");
    errorMessagep2.style.display= "none";

    if(NumberOfMonthsDeducted===""){
        const errorMessagep3 = document.getElementById("errorMessageContract5");
        errorMessagep3.innerHTML = "The number of months to be deducted is required. If you are not deducting, enter zero (0) in the field above.";
        errorMessagep3.style.display= "block";
        return
    }

    const errorMessagep3 = document.getElementById("errorMessageContract5");
    errorMessagep3.style.display= "none";


    const dorCalculatedFormat = new Date(dorCalculated);
    const currentDate = new Date();

    let allMonths= dorCalculatedFormat.getMonth() - currentDate.getMonth() + (12 * (dorCalculatedFormat.getFullYear() - currentDate.getFullYear()));


    const NumberOfMonthsforCalc = document.getElementById("deductOfMonthsInput");


    NumberOfMonthsforCalc.value = allMonths - parseInt(NumberOfMonthsDeducted)
}

let numberOfMonthsForCalcBtn = document.getElementById("numberOfMonthsForCalc");

numberOfMonthsForCalcBtn.addEventListener("click", calculateNumberOfMonthsForCalculation);
