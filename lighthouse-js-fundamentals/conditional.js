const raining = false;
const cold = true; 

if (raining) {
  console.log("Don't forget your umbrella!");
} else{
  console.log("Don't need an umbrella!")
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");


const temperature = 0;

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else{
  console.log("Short sleeves are fine!");
}
console.log("Now you're ready to go outside!");