const howManyHundreds = function(num){
  var num = Math.floor(num / 100);
  return num;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(55), "=?", 0);
console.log(howManyHundreds(100), "=?", 1);
console.log(howManyHundreds(200), "=?", 2);
console.log(howManyHundreds(123456), "=?", 1234);