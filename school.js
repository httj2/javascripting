// elementary school >13
// secondary school 13 - 18 (inclusive)
// Lighthouse Labs: the rest


const whichSchool = function(age) {
  let returnedSchool = ""; 
  if (age > 0 && age < 13){
    returnedSchool = "elementary School";
  } else if (age >= 13 && age <= 18){
    returnedSchool = "Secondary School";
  } else {
    returnedSchool = "Lighthouse Labs";
  }
  return returnedSchool;
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));



