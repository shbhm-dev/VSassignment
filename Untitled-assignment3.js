const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 9
}
keys = ["a", "d"]
    // Question 1
    //function should delete all the keys from initial Object and return the original object
function deleteKeys(obj, keys) {
    for (const key of keys) {
        delete obj[key]
    }
    return obj
}

console.log(deleteKeys(obj, keys))


// Question 2
///function should delete all the keys from initial Object and return the new object

function deleteKeysNew(obj, keys) {
    const newObj = {}

    for (const [key, value] of Object.entries(obj)) {
        if (!keys.includes(key)) {
            newObj[key] = value
        }
    }
    return newObj

}
console.log(deleteKeysNew(obj, keys))

// Question 3
// Function to Check if a number is a prime or not
function checkPrime(n) {

    let i, flag = true;

    for (i = 2; i * i < n; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }

    if (flag == true)
        return true
    else
        return false
}

// Recursive Fnction for Fibonacci Series
// Argument passed is an integer

function printFibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return printFibonacci(n - 1) + printFibonacci(n - 2);


    }
}

// Helper Function to check that last digit is 1 or 9 and also a prime and print fibonacci series 
function help(n) {
    let last_digit = n % 10

    // console.log((last_digit != 1 || last_digit != 9))
    if (checkPrime(n) && (last_digit != 1 || last_digit != 9) && last_digit != 3 && last_digit != 7) {
        console.log("Invalid number")
    } else {
        for (let i = 0; i <= n; i++)
            console.log(printFibonacci(i))
    }

}
help(13)

// QUESTION 4
// function to generate & print random number between 1-100 till the random number generated 
//  (end with 9 divisible by 3) or (end with 6 and divisble by 4).

function randomGenerator() {

    while (true) {
        let num = Math.floor(Math.random() * 100) + 1; // for generating random no from 1 to 100
        const last_digit = num % 10
        if ((last_digit == 9 && num % 3 == 0) || (last_digit == 6 && num % 4 == 0)) {
            console.log(`Condition is true here ${num}`)
            break
        }
        console.log(num)

    }
}

randomGenerator()