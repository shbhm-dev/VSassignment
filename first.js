// Function to perform OR | AND | MINUS operation 
// ARGS Passed : Two arrays and one operation
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
performOperation(arr1, arr2, "OR")
performOperation(arr1, arr2, "AND")
performOperation(arr1, arr2, "MINUS")

//BONUS 1
function onlyOneArray(firstArray, secondArray) {
    let finalArray = [...performOperation(firstArray, secondArray, "MINUS"), ...performOperation(secondArray, firstArray, "MINUS")]
    console.log(`Elements present only in one of Arrays ${finalArray}`)

}

// onlyOneArray([1, 2, 3, 7, 8, 9], [4, 5, 6, 7, 8, 9])

//BONUS 2
// Merge the sorted array
function mergerSortedArrays(firstArray, secondArray) {
    let resultArray = []
    let i = 0
    let j = 0
    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            resultArray.push(firstArray[i])
            i++
        } else if (secondArray[j] < firstArray[i]) {
            resultArray.push(secondArray[j])
            j++
        } else {
            resultArray.push(firstArray[i])
            i++;
            j++;

        }

    }
    while (i < firstArray.length) {
        resultArray.push(firstArray[i])
        i++
    }

    while (j < secondArray.length) {
        resultArray.push(secondArray[j])
        j++
    }
    console.log(`Sorted merged array ${resultArray}`)
}

// mergerSortedArrays([1, 3, 5, 5, 10], [2, 4, 5, 6, 6, 12])