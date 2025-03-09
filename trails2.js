
Date.prototype.add = function (sInterval, iNum) {
    var currentDate = new Date();
    if (!sInterval || iNum == 0) return currentDate;
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

//sample usage
var d = new Date();

var d2 = d.add("Year", 3); //+3days

var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = d2.toLocaleDateString(undefined, options);

console.log(formattedDate);
