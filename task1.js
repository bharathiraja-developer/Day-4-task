// Programs in anonymous function and IIFE

//a) Print odd numbers in an array
let arrayOfValues = [2, 1, 12, 15, 17, 9, 4, 3];
//anonymous function
let oddNumbers = function (array) {
    let answer = [];
    for (let values of array) {
        if ((values % 2) != 0) {
            answer.push(values);
        }
    } return (answer.join(' '));
}
console.log(oddNumbers(arrayOfValues));

//IIFE
(function (array) {
    let answer = [];
    for (let values of array) {
        if ((values % 2) != 0) {
            answer.push(values);
        }
    } console.log(answer.join(' '));
})(arrayOfValues)

//b) Convert all the strings to title caps in a string array
let stringArray = ['apple', 'orAnge', 'mAngo'];
//anonymous function
let titleCaps = function (array) {
    let answer = [];
    for (let i = 0; i < array.length;i++) {
        array[i] = array[i].toLowerCase().split('');
    }
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].join('').slice(1); 
    }
    return array.join(' ');
}
console.log(titleCaps(stringArray));

//IIFE
((array) => {
    let answer = [];
    for (let i = 0; i < array.length;i++) {
        array[i] = array[i].toLowerCase().split('');
    }
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].join('').slice(1); 
    }
    console.log(array.join(' '));
})(stringArray)

//c) Sum of all numbers in an array
//we take this same array =>let arrayOfValues = [2, 1, 12, 15, 17, 9, 4, 3];
//anonymous function
let add = function (array) {
    let a = 0;
    for (let values of array) {
        a+=values
    } return (a);
}
console.log(add(arrayOfValues));

//IIFE
(function (array) {
    let a = 0;
    for (let values of array) {
        a+=values
    } console.log (a);
})(arrayOfValues)

//d) Return all the prime numbers in an array
// anonymous function
let values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let isPrime = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 1) {
            array.splice(i, 1);
        }
        for (let j = 2; j < array[i]; j++) {
            if (array[i] != (2 || 3 || 5 || 7 || 11)) {
                if ((array[i] % j) == 0) {
                    array.splice(i, 1);
                }
            }
        }
        
    }
    return array.join(' ');
}
console.log(isPrime(values));

//IIFE
(function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 1) {
            array.splice(i, 1);
        }
        for (let j = 2; j < array[i]; j++) {
            if (array[i] != (2 || 3 || 5 || 7 || 11)) {
                if ((array[i] % j) == 0) {
                    array.splice(i, 1);
                }
            }
        }
        
    }
    console.log(array.join(' '))
})(values)

//e) Return all the palindromes in an array
let pali = ['deified', 'murdrum', 'racecar', 1661, 'man', 'normal'];
//anonymous function
let palindrome = function (array) {
    let rev = [];
    for (let i = 0; i < array.length; i++){
        let a = String(array[i]).split('').reverse().join('');
        if (String(array[i]) == a) {
            rev[i] = a;
        }
    }
    return rev.join(' ');
    }
console.log(palindrome(pali));

//IIFE
(function (array) {
    let rev = [];
    for (let i = 0; i < array.length; i++){
        let a = String(array[i]).split('').reverse().join('');
        if (String(array[i]) == a) {
            rev[i] = a;
        }
    }
    console.log(rev.join(' '));
})(pali)

//f) Return median of two sorted arrays of the same size.
let array1 = [3, 10, 9, 6];
let array2 = [2, 1, 7, 8];
let median = function (a, b) {
    let commonArray = [];
    for (let i = 0; i < a.length + b.length; i++){
        if (i < a.length){
            commonArray.push(a[i]);
        } else {
            commonArray.push(b[i - a.length]);
        }
    }
    commonArray.sort((c, d) => c - d);
    let middle = commonArray.length % 2;
    let ans = commonArray.length / 2;
    if (middle == 0) {
        let mid = [];
        mid.push(commonArray[ans-1]);
        mid.push(commonArray[ans]);
        return mid.join(' ');
    }
}
console.log(median(array1, array2));

//IIFE
((a, b)=> {
    let commonArray = [];
    for (let i = 0; i < a.length + b.length; i++){
        if (i < a.length){
            commonArray.push(a[i]);
        } else {
            commonArray.push(b[i - a.length]);
        }
    }
    commonArray.sort((c, d) => c - d);
    let middle = commonArray.length % 2;
    let ans = commonArray.length / 2;
    if (middle == 0) {
        let mid = [];
        mid.push(commonArray[ans-1]);
        mid.push(commonArray[ans]);
        console.log(mid.join(' '));
    }
})(array1, array2)

//g) Remove duplicates from an array
//anonymous function
let dup = [1, 9, 2, 3, 3, 5, 6, 1, 7, 8, 10, 4, 5, 9];
let revomeDuplicates = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (dup[i] != dup[i + 1]) {
            newArray.push(dup[i]);
        }
    }
    for (let i = 0; i < newArray.length; i++){
        for (let j = i + 1; j < newArray.length; j++){
            if (newArray[i] == newArray[j]) {
                newArray.splice(j, 1);
            }
        }
    }
    return newArray.join(' ');
}
console.log(revomeDuplicates(dup));

//IIFE
(function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (dup[i] != dup[i + 1]) {
            newArray.push(dup[i]);
        }
    }
    for (let i = 0; i < newArray.length; i++){
        for (let j = i + 1; j < newArray.length; j++){
            if (newArray[i] == newArray[j]) {
                newArray.splice(j, 1);
            }
        }
    }
    console.log(newArray.join(' '));
})(dup)

//h) Rotate an array by k times
//anonymous function
arrayOfValues = [2, 1, 12, 15, 17, 9, 4, 3];
let numberOfRotation = 3;
let rotation = function (array, n) {
    let rArray = array;
    for (let j = 0; j < n; j++){
        for (let i = 0; i < 1; i++){
        rArray.push(array[i]);
        rArray.splice(i, 1);
        }
    }
    return rArray.join(' ');
}
console.log(rotation(arrayOfValues, numberOfRotation));

//IIFE
arrayOfValues = [2, 1, 12, 15, 17, 9, 4, 3];
((array, n) =>{
    let rArray = array;
    for (let j = 0; j < n; j++){
        for (let i = 0; i < 1; i++){
        rArray.push(array[i]);
        rArray.splice(i, 1);
        }
    }
    console.log(rArray.join(' '));
})(arrayOfValues,numberOfRotation)