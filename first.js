/**
 * Function to perform OR | AND | MINUS operation 
 * @param -- Two arrays and one operation(String)
 * @return -- array 
 */
function performOperation(firstArray, secondArray, operation) {
    let resultArray = []
    switch (operation) {
        case "AND":
            {
                for (let i = 0; i < firstArray.length; i++) {
                    if (secondArray.indexOf(firstArray[i]) >= 0) {
                        resultArray.push(firstArray[i])
                    }
                }
                break;
            }
        case "OR":
            {

                for (let i = 0; i < firstArray.length; i++) {
                    if (resultArray.indexOf(firstArray[i]) == -1) {
                        resultArray.push(firstArray[i])
                    }
                }

                for (let i = 0; i < secondArray.length; i++) {
                    if (resultArray.indexOf(secondArray[i]) == -1) {
                        resultArray.push(secondArray[i])
                    }
                }
                break;
            }
        case "MINUS":
            {
                for (let i = 0; i < firstArray.length; i++) {
                    if (secondArray.indexOf(firstArray[i]) == -1) {
                        resultArray.push(firstArray[i])
                    }
                }
                break;
            }
        default:
            {
                console.log("Wrong Operation!")
                return
            }
    }
    console.log(resultArray)
    console.log(`Array Operation ${operation} has been performed on Array A of size: ${firstArray.length} and Array B of size: ${secondArray.length} and Output Array is of size: ${resultArray.length}`)
    return resultArray
}

const arr1 = [1, 1, 3, 5, 6, 7]
const arr2 = [2, 4, 4, 1, 1]
    // performOperation(arr1, arr2, "OR")
    // performOperation(arr1, arr2, "AND")
    // performOperation(arr1, arr2, "MINUS")

//BONUS 1
/**
 * Function to get an Array which has elements present only in one of Arrays
 * @param -- Two arrays 
 * @return -- --
 */
function onlyOneArray(firstArray, secondArray) {
    let finalArray = [...performOperation(firstArray, secondArray, "MINUS"), ...performOperation(secondArray, firstArray, "MINUS")]
    console.log(`Elements present only in one of Arrays ${finalArray}`)

}

//BONUS 2
/**
 * Function to merge two sorted arrays
 * @param -- Two arrays and operation(String)
 * @return -- Array
 */
function mergerSortedArrays(firstArray, secondArray, operation) {

    let i = 0 // iterator for first array
    let j = 0 // iterator for second array
    let resultArray = []; // array to store the resultant array

    switch (operation) {
        case "AND":
            {
                while (i < firstArray.length && j < secondArray.length) {
                    while (j + 1 < secondArray.length && secondArray[j] == secondArray[j + 1]) {
                        j++
                    }
                    while (i + 1 < firstArray.length && firstArray[i] == firstArray[i + 1]) {
                        i++
                    }

                    // If both elements are equal in both the arrays
                    if (firstArray[i] == secondArray[j]) {
                        resultArray.push(firstArray[i])
                        i++
                        j++
                    } else if (firstArray[i] < secondArray[j])
                        i++
                        else j++
                }

                return resultArray;
            }
        case "OR":
            {

                while (i < firstArray.length && j < secondArray.length) {

                    while (j + 1 < secondArray.length && secondArray[j] == secondArray[j + 1]) {
                        j++
                    }
                    while (i + 1 < firstArray.length && firstArray[i] == firstArray[i + 1]) {
                        i++
                    }


                    if (firstArray[i] < secondArray[j]) {
                        resultArray.push(firstArray[i]);
                        i++
                    } else if (firstArray[i] > secondArray[j]) {
                        resultArray.push(secondArray[j]);
                        j++
                    } else {
                        resultArray.push(secondArray[j]);
                        i++
                        j++
                    }
                }

                while (i < firstArray.length) {
                    resultArray.push(firstArray[i]);
                    i++;
                }

                while (j < secondArray.length) {
                    resultArray.push(secondArray[j]);
                    j++;
                }
                return resultArray;
            }

        case "MINUS":
            {
                while (j + 1 < secondArray.length && secondArray[j] == secondArray[j + 1]) {
                    j++;
                }
                while (i < firstArray.length && j < secondArray.length) {

                    while (i + 1 < firstArray.length && firstArray[i] == firstArray[i + 1]) {
                        i++
                    }

                    if (firstArray[i] < secondArray[j]) {
                        resultArray.push(firstArray[i]);
                        i++;
                    } else if (firstArray[i] > secondArray[j]) {
                        j++;
                    } else {
                        i++;
                        j++;
                    }
                }

                while (i < firstArray.length) {
                    resultArray.push(firstArray[i]);
                    i++;
                }
                return resultArray;
            }
        default:

            console.log("Wrong Operation");
    }
}
console.log(mergerSortedArrays([1, 4, 6, 9, 11], [2, 3, 5, 7, 8, 12], "OR"))