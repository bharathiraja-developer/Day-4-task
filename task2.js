//arrow functions

//a) Print odd numbers in an array

let arrayOfValues = [2, 1, 12, 15, 17, 9, 4, 3];
let oddNumbers = (array)=> {
    let answer = [];
    for (let values of array) {
        if ((values % 2) != 0) {
            answer.push(values);
        }
    } return (answer.join(' '));
}
console.log(oddNumbers(arrayOfValues));

//b) Convert all the strings to title caps in a string array

let stringArray = ['apple', 'orAnge', 'mAngo'];
((array) =>{
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
let add =(array)=>{
    let a = 0;
    for (let values of array) {
        a+=values
    } return (a);
}
console.log(add(arrayOfValues));

//d) Return all the prime numbers in an array

let values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let isPrime =(array)=> {
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

//e) Return all the palindromes in an array

let pali = ['deified', 'murdrum', 'racecar', 1661, 'man', 'normal'];
((array) =>{
    let rev = [];
    for (let i = 0; i < array.length; i++){
        let a = String(array[i]).split('').reverse().join('');
        if (String(array[i]) == a) {
            rev[i] = a;
        }
    }
    console.log(rev.join(' '));
    })(pali)