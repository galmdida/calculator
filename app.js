// Create a function
// Calculate the age in years, months and days
function calculateAge(event) {
    event.preventDefault() // To avoid default form submission

    const dobInput = document.getElementById("inputDob").value;

    const dob = new Date(dobInput);
    const currentDate = new Date();

    let diff = new Date(currentDate.getTime() - dob.getTime());

    let ageInYrs = diff.getUTCFullYear() - 1970; // Gives difference as year

    let ageInMonths = diff.getUTCMonth(); // Gives month count of difference

    let ageIndays = diff.getUTCDate() - 1; // Gives day count of difference

    const showAgeInYrs = document.getElementById("ageInYrs");
    const showAgeInMonths = document.getElementById("ageInMonths");
    const showAgeIndays = document.getElementById("ageIndays");

    showAgeInYrs.value = ageInYrs + " yrs";
    showAgeInMonths.value = ageInMonths + " mnths";
    showAgeIndays.value = ageIndays + " days";
};

const calcAge = document.getElementById("calcAge");

calcAge.addEventListener("click", calculateAge);


// Create function that calculates date of retirements and formats it
function calculateDateOfRetirement(event) {

    event.preventDefault() // To avoid default form submission

    const dobInput = document.getElementById("inputDob").value;
    const AgeOfRetirement = document.getElementById("aor").value;

    if(AgeOfRetirement===""){
        const errorMessagep = document.getElementById("errorMessage");
        errorMessagep.innerHTML = "Age of retirement is required! fill the above field";
        errorMessagep.style.display= "block";
        return
    }
    const errorMessagep = document.getElementById("errorMessage");
    errorMessagep.style.display= "none";


    const dob = new Date(dobInput);
    const aor = parseInt(AgeOfRetirement);


    let dor = new Date(dob.getFullYear() + aor, dob.getMonth(), dob.getDate());

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    var formattedDate = dor.toLocaleDateString(undefined, options);

    const formatteddor = document.getElementById("dorPopulate");

    formatteddor.value = formattedDate;
}

let retDateCalcBtn = document.getElementById("calcDateOfRetirement");

retDateCalcBtn.addEventListener("click", calculateDateOfRetirement);

// Function that calculates the remaining number of months in an employment
// Function that calculates the remaining period in an employment
function calculateRemainingPeriod(event) {

    event.preventDefault() // To avoid default form submission

    const dorCalculated = document.getElementById("dorPopulate").value;
    

    if(dorCalculated===""){
        const errorMessagep2 = document.getElementById("errorMessage2");
        errorMessagep2.innerHTML = "Date of retirement is required! calculate date of retirement first";
        errorMessagep2.style.display= "block";
        return
    }

    const errorMessagep2 = document.getElementById("errorMessage2");
    errorMessagep2.style.display= "none";


    const dorCalculatedFormat = new Date(dorCalculated);
    const currentDate = new Date();

    let allyrs = dorCalculatedFormat.getFullYear() - currentDate.getFullYear();

    let allMonths= dorCalculatedFormat.getMonth() - currentDate.getMonth() + (12 * (dorCalculatedFormat.getFullYear() - currentDate.getFullYear()));


    const allyrsCalculated = document.getElementById("ttyrs");
    const allMonthsCalculated = document.getElementById("ttmonths")

    allyrsCalculated.value = allyrs + " in yrs."
    allMonthsCalculated.value = allMonths + " in mnths"
}

let calcRemainingPeriodBtn = document.getElementById("calcRemainingPeriod");

calcRemainingPeriodBtn.addEventListener("click", calculateRemainingPeriod);

// Calculate remaining months for calculation
function calculateNumberOfMonths(event) {

    event.preventDefault() // To avoid default form submission

    const dorCalculated = document.getElementById("dorPopulate").value;
    const NumberOfMonthsDeducted = document.getElementById("NoDeducted").value

    if(dorCalculated===""){
        const errorMessagep2 = document.getElementById("errorMessage2");
        errorMessagep2.innerHTML = "Date of retirement is required! calculate date of retirement first";
        errorMessagep2.style.display= "block";
        return
    }

    const errorMessagep2 = document.getElementById("errorMessage2");
    errorMessagep2.style.display= "none";

    if(NumberOfMonthsDeducted===""){
        const errorMessagep3 = document.getElementById("errorMessage3");
        errorMessagep3.innerHTML = "The number of months to be deducted is required. If you are not deducting, enter zero (0) in the field above.";
        errorMessagep3.style.display= "block";
        return
    }

    const errorMessagep3 = document.getElementById("errorMessage3");
    errorMessagep3.style.display= "none";


    const dorCalculatedFormat = new Date(dorCalculated);
    const currentDate = new Date();

    let allMonths= dorCalculatedFormat.getMonth() - currentDate.getMonth() + (12 * (dorCalculatedFormat.getFullYear() - currentDate.getFullYear()));


    const NumberOfMonthsforCalc = document.getElementById("NoOfMonthsInput");


    NumberOfMonthsforCalc.value = allMonths - parseInt(NumberOfMonthsDeducted)
}

let NoOfMonthsForCalcBtn = document.getElementById("NoOfMonthsForCalc");

NoOfMonthsForCalcBtn.addEventListener("click", calculateNumberOfMonths);


