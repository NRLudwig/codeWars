const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("hello world this is nate");
console.log("this is the initial array");
console.log(someArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sumOfEven(arr) {
  const posArr = [0];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      posArr.push(num);
    }
  });

  const sum = posArr.reduce(function (preVal, item) {
    return preVal + item;
  });
  // return sum;
  console.log(sum);
}
console.log("sum of the even numbers is");
sumOfEven(someArray);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function positiveSum(arr) {
  const posArr = [0];
  arr.forEach(function (num) {
    if (num >= 0) {
      posArr.push(num);
    }
  });

  const sum = posArr.reduce(function (preVal, item) {
    return preVal + item;
  });
  // return sum;
  console.log(sum);
}
console.log("sum of the positive numbers is");
positiveSum(someArray);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function grow(x) {
  const product = x.reduce(function (preVal, item) {
    return preVal * item;
  });
  // return product;
  console.log(product);
}
console.log("this is the product of all numbers");
grow(someArray);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function squareSum(numbers) {
  const numbersSquared = [0];
  numbers.forEach(function (num) {
    const numSquared = num * num;
    numbersSquared.push(numSquared);
  });
  const res = numbersSquared.reduce(function (preVal, item) {
    return preVal + item;
  });
  // return res;
  console.log(res);
}
console.log("this is the square sum");
squareSum(someArray);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function boolToWord(bool) {
  if (bool) {
    return "true";
  } else {
    return "false";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//convert the time to milliseconds
// 1 sec = 1000milsec
// 1 min = 60000milsec
// 1 hour = 60000milsec * 60
// then add all totals together
function past(h, m, s) {
  const sec = s * 1000;
  const min = m * 60000;
  const hour = h * (60000 * 60);
  return hour + min + sec;
}

past(1, 0, 0);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
  const rna = dna.replaceAll("T", "U");
  return rna;
}

const dnaStrand = "GACTTGGGCAAAATCGAATCGAT";
DNAtoRNA(dnaStrand);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const names0 = [];
const names1 = ["Peter"];
const names2 = ["Jacob", "Alex"];
const names3 = ["Max", "John", "Mark"];
const names4 = ["Alex", "Jacob", "Mark", "Max", "1", "2", "3"];

function likes(names) {
  let num = 0;
  names.forEach(function (name) {
    num++;
  });
  if (names.length === 0) {
    // return "no one likes this";
    console.log("no one likes this");
  }
  if (names.length === 1) {
    // return `${names[0]} likes this`;
    console.log(`${names[0]} likes this`);
  }
  if (names.length === 2) {
    // return`${names[0]} and ${names[1]} like this`;
    console.log(`${names[0]} and ${names[1]} like this`);
  }
  if (names.length === 3) {
    // return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  }
  if (names.length >= 4) {
    // return `${names[0]}, ${names[1]} and ${num-2} others like this`;
    console.log(`${names[0]}, ${names[1]} and ${num - 2} others like this`);
  }
}

likes(names0);
likes(names1);
likes(names2);
likes(names3);
likes(names4);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const string =
  "abracadabraadsfkjahoieuryoeiubfadjkbfadbvcdfhoiaueghowaygfadfkjlasdnbglkaj123434  ";

function getCount(str) {
  const array = str.split("");
  let count = 0;
  array.forEach(function (letter) {
    switch (letter) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
    }
  });
  // console.log(count);
  return count;
}

getCount(string);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const stringOfNumbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

function highAndLow(numbers) {
  const arrayFromString = numbers.split(" ");
  console.log(arrayFromString);
  const sortedArray = arrayFromString.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);
  const high = sortedArray[sortedArray.length - 1];
  const low = sortedArray[0];
  // return `${high} ${low}`;
  console.log(`${high} ${low}`);
}

highAndLow(stringOfNumbers);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbersArray = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  const sortedArray = numbers.sort(function (a, b) {
    return a - b;
  });
  // console.log(sortedArray[0] + sortedArray[1]);
  return sortedArray[0] + sortedArray[1];
}

sumTwoSmallestNumbers(numbersArray);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const string2 = "eloquent";
const string3 = "country";

function removeChar(str) {
  console.log(str[0]);
  console.log(str[str.length - 1]);
  const shortString = str.slice(1, str.length - 1);
  console.log(str);
  console.log(shortString);
  // return shortString;
}

removeChar(string2);
removeChar(string3);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const someArray2 = [101, 45, 75, 105, 99];

function check(a, x) {
  // return a.includes(x);
  console.log(a.includes(x));
}

check(someArray2, 107);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const year1 = "1098";
const year2 = "1900";
const year3 = "1776";
const year4 = "2259";

function whatCentury(year) {
  let cent = parseInt(year.slice(0, 2)) + 1;
  let centEnd = year.slice(2);
  let centString = cent.toString();
  if (centEnd === "00") {
    console.log(`${cent - 1}th`);
  } else if (centString.endsWith(1) && !centString.startsWith(1)) {
    console.log(`${centString}st`);
  } else if (centString.endsWith(2) && !centString.startsWith(1)) {
    console.log(`${centString}nd`);
  } else if (centString.endsWith(3) && !centString.startsWith(1)) {
    console.log(`${centString}rd`);
  } else {
    console.log(`${centString}th`);
  }
}

whatCentury(year1);
whatCentury(year2);
whatCentury(year3);
whatCentury(year4);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
