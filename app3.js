// In this application we are going to calculate maturity date by either day, month or year given.
function calculateMaturityDate(event) {
    event.preventDefault() // To avoid default form submission

    Date.prototype.add = function (sInterval, iNum) {
        currentDate = new Date();
        if (!sInterval || iNum === 0) return currentDate;
        switch (sInterval.toLowerCase()) {
            case "day":
                currentDate.setDate(currentDate.getDate() + iNum);
                break;
            case "month":
                currentDate.setMonth(currentDate.getMonth() + iNum);
                break;
            case "year":
                currentDate.setFullYear(currentDate.getFullYear() + iNum);
                break;
        }
        return currentDate;
    }

    sInterval = document.getElementById("periodtoChange").value;
    Num = document.getElementById("intervalLength").value;
    iNum = parseInt(Num)

    const startDate = document.getElementById("startDate").value;
    const startDateFormatted = new Date(startDate);


    let dateOfMaturity = startDateFormatted.add(sInterval, iNum);

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = dateOfMaturity.toLocaleDateString(undefined, options);

    const formatteddom = document.getElementById("dateOfMaturity");

    formatteddom.value = formattedDate;
}

let matDateCalcBtn = document.getElementById("calculateDateOfMaturity");

matDateCalcBtn.addEventListener("click", calculateMaturityDate);