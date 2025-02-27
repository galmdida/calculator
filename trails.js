const dob = new Date("2010-03-25");

const currentDate = new Date();

let age = currentDate.getFullYear() - dob.getFullYear();


let monthDif = currentDate.getMonth() - dob.getMonth();

// console.log(monthDif);


var ctrldob = new Date("2010-Feb-24");

var ctrldoa = new Date();

var diff = new Date(ctrldoa.getTime() - ctrldob.getTime());

console.log(diff.getUTCFullYear() - 1970); // Gives difference as year

console.log(diff.getUTCMonth()); // Gives month count of difference

console.log(diff.getUTCDate() - 1); // Gives day count of difference


// Get dor

// your date of birth
const dob1 = new Date("1960-03-30");

const aor = parseInt(60)

let dor = new Date(dob1.getFullYear() + aor, dob1.getMonth(), dob1.getDate());

var options = { year: 'numeric', month: 'long', day: 'numeric' };

var formattedDate = dor.toLocaleDateString(undefined, options);

console.log(formattedDate);

// Getting the difference between dates as months
// Assumes Date From (df) and Date To (dt) are valid etc...
var df= new Date("01/15/2060");
var today = new Date();

var allMonths= df.getMonth() - today.getMonth() + (12 * (df.getFullYear() - today.getFullYear()));

var allyrs = df.getFullYear() - today.getFullYear();

console.log(allMonths);
console.log(allyrs);