function performOperation(firstArray, secondArray, operation) {
    let resultArray = []
    if (operation === "AND") {
        for (let i = 0; i < firstArray.length; i++) {
            if (secondArray.indexOf(firstArray[i]) >= 0) {
                resultArray.push(firstArray[i])
            }
        }

    } else if (operation === "OR") {

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

    } else if (operation === "MINUS") {
        for (let i = 0; i < firstArray.length; i++) {
            if (secondArray.indexOf(firstArray[i]) == -1) {
                resultArray.push(firstArray[i])
            }
        }

    } else {
        console.log("Wrong Operation!")
        return
    }
    console.log(resultArray)
    console.log(`Array Operation ${operation} has been performed on Array A of size: ${firstArray.length} and Array B of size: ${secondArray.length} and Output Array is of size: ${resultArray.length}`)
    return resultArray
}

performOperation([1, 1, 3, 5, 6, 7], [2, 4, 4, 1, 1], "OR")
    // performOperation([1, 1, 3, 5, 6, 7], [2, 4, 4, 1, 1], "AND")
    // performOperation([1, 1, 3, 5, 6, 7], [2, 4, 4, 1, 1], "MINUS")

//BONUS 1
function onlyOneArray(firstArray, secondArray) {
    let finalArray = [...performOperation(firstArray, secondArray, "MINUS"), ...performOperation(secondArray, firstArray, "MINUS")]
    console.log(`Elements present only in one of Arrays ${finalArray}`)

}

// onlyOneArray([1, 2, 3, 7, 8, 9], [4, 5, 6, 7, 8, 9])

//BONUS 2
// Change only in OR operation is required

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