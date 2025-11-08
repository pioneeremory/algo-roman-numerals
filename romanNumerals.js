function toRomanLazy(num) {
  output = "";
  let romanNumeralToArabic = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
  }
  romanNumeralPriorityOrder = ['M','D','C','L','X','V','I'];

  for (let i = 0; i <= romanNumeralPriorityOrder.length; i++) {
    let counter = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
    // Need to access the value, not the index ^
    
    if (counter > 0){
      output += romanNumeralPriorityOrder[i].repeat(counter);
    }
    num -= counter * romanNumeralToArabic[romanNumeralPriorityOrder[i]];
  }
  console.log(output);
  return output;
}

function toRoman(num) {
    output = "";
  let romanNumeralToArabic = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  L: 50,
  XL:40,
  X: 10,
  IX:9,
  V: 5,
  IV:4,
  I: 1
  }
  romanNumeralPriorityOrder = ['M','CM','D','CD','C','L','XL','X','IX','V','IV','I'];

  for (let i = 0; i <= romanNumeralPriorityOrder.length; i++) {
    let counter = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
    // Need to access the value, not the index ^
    
    if (counter > 0){
      output += romanNumeralPriorityOrder[i].repeat(counter);
    }
    num -= counter * romanNumeralToArabic[romanNumeralPriorityOrder[i]];
  }
  console.log(output);
  return output;
}

module.exports = { toRoman, toRomanLazy };

toRoman(400);
// welcome to roman numerals hell.