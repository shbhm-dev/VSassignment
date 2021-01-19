// Given Data
let studentsData = [{
        "roll_no": 14,
        "firstName": "GAURAV",
        "lastName": "kalra",
        "marks": {
            "phy": 75,
            "csc": 85,
            "eng": 65,
            "math": 37,
            "chem": 34,
        },
        "address": {
            "locality": "ramprastha",
            "distanceFromSchoolInKM": 2
        },
        "languages": ["english", "hindi", "punjabi", "sanskrit"]
    },
    {
        "roll_no": 7,
        "firstName": "HARMAN DEEP",
        "lastName": "singh",
        "marks": {
            "phy": 81,
            "csc": 84,
            "eng": 89,
            "math": 89,
            "chem": 77,
        },
        "address": {
            "locality": "shreshta vihar",
            "distanceFromSchoolInKM": 0.5
        },
        "languages": ["english", "hindi", "punjabi"]

    },
    {
        "roll_no": 2,
        "firstName": "KARAN",
        "lastName": "bhola",
        "marks": {
            "phy": 90,
            "csc": 85,
            "eng": 80,
            "math": 95,
            "chem": 85,
        },
        "address": {
            "locality": "vigyan vihar",
            "distanceFromSchoolInKM": 1
        },
        "languages": ["english", "hindi", "punjabi", "sanskrit"]
    }

];


// Question 1
/**
 * function that finds all the students who have received 90 marks in atleast one subject
 * @param Number
 * @return --
 */


const atleastOneSubject = function(minmarks) {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const vals = Object.values(marksObj)
            const filteredMarks = vals.filter((marks) => marks > minmarks)
            if (filteredMarks.length > 0) {
                result.push({
                    "roll_no": studentsData[itr].roll_no,
                    "name:": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"])
                })
            }
        }
        console.log(result)
    }
    // atleastOneSubject(90)

// Question 1.b

/**
 * function that finds all the students who have achieved distinction
 * @param --
 * @return array of results stored in objects
 */


const distinctionStudent = function() {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const vals = Object.values(marksObj)
        if (vals.every((marks) => marks >= 75)) // check if all the makrs are gearter tahn equal to 75

            result.push({
            "roll_no": studentsData[itr].roll_no,
            "name:": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"])
        })

    }
    return result
}





// console.log(distinctionStudent())

// QUE 2 a,b
/**
 * function that ranks the students starting from topper
 * @param -- (String)order in which the result should be returned (incr/decr) 
 * @return -- array of results stored in objects
 */


const studentRank = function(order = "decr") {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const values = Object.values(marksObj)

        // To calculate sum of all the marks
        let val = values.reduce(function(total, num) {
            return total + num
        })


        result.push({
            "name": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"]),
            "totalMarks": val
        })

    }

    result.sort(function(a, b) {
        return b.totalMarks - a.totalMarks
    })
    if (order === "incr") {
        result.reverse()
    }

    let finalarr = []

    for (let itr = 0; itr < result.length; itr++) {
        finalarr.push({
                [itr + 1]: {
                    "name": result[itr].name,
                    "totalMarks": result[itr].totalMarks
                }
            }

        )
    }

    return finalarr

}


// console.log(studentRank("incr"))



// QUE 2 C , D
/**
 * function that calculates best 4 marks of each student and sort them on the basis of best 4 marks
 * @param -- 
 * @return -- array of results stored in objects in sorted order
 */
const best4Marks = function() {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const val = Object.values(marksObj)


        // Calculating best 4 marks for each students
        const sum = val.sort(function(a, b) {
            return b - a
        }).slice(0, 4).reduce(function(total, num) {
            return total + num
        })

        result.push({
            "name": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"]),
            "best4Marks": sum
        })

    }
    result.sort(function(a, b) {
        return b.best4Marks - a.best4Marks
    })

    let finalarr = []

    for (let itr = 0; itr < result.length; itr++) {
        finalarr.push({
                [itr + 1]: {
                    "name": result[itr].name,
                    "best4Marks": result[itr].best4Marks
                }
            }

        )
    }

    return finalarr

}

// console.log(best4Marks())





// QUE 3
/**
 * function that calculates list of all students who failed in 1 or more exam
 * @param -- 
 * @return -- array of results stored in objects with number of backs
 */
const failedStudents = function() {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const vals = Object.values(marksObj)
                // Filtering array for student marks with lesst than 40
            const filteredMarks = vals.filter((marks) => marks < 40)
            if (filteredMarks.length > 0) {
                result.push({
                    "roll_no": studentsData[itr].roll_no,
                    "name:": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"]),
                    "num_Backs": filteredMarks.length
                })
            }
        }
        return result
    }
    // failedStudents()

// QUE 3.b
/**
 * function that calculates list of all students who failed in 1 or more exam with the subjects in which the sudent is failed
 * @param -- 
 * @return -- array of results stored in objects with number of backs and those subjects
 */
const failedStudentsWithSubjects = function() {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks


            let failed_subjects = []
            for (const [key, value] of Object.entries(marksObj)) {

                if (value < 40) {
                    failed_subjects.push(key)
                }
            }

            result.push({
                "roll_no": studentsData[itr].roll_no,
                "name:": studentsData[itr]["firstName"].concat(" ", studentsData[itr]["lastName"]),
                "failed_subjects": failed_subjects
            })

        }
        return result
    }
    // console.log(failedStudentsWithSubjects())





// QUE 4 a,b,c,d
/**
 * function that find the most commonly spoken language
 * @param -- order in which order we want to sort the languages (desc/incr)
 * @return -- array of languages with their count
 */
const mostlyCommonLang = function(order = "incr") {
    let langMap = new Map()
    for (let itr = 0; itr < studentsData.length; itr++) {
        let langArr = studentsData[itr].languages
        for (const lang of langArr) {

            if (langMap.has(lang)) {
                const val = 1 + Number(langMap.get(lang))
                langMap.set(lang, val)
            } else {
                langMap.set(lang, 1)
            }

        }

    }

    let res = [...langMap];
    console.log("Analytics of the language", res)
    res.sort(function(a, b) {

        return b[1] - a[1]
    })

    console.log("Most common language", res[0])
    if (order === "incr") {
        console.log("Least 3 Languages used")
        res.reverse()
        return res.slice(0, 3)


    } else {
        console.log("Top 3 Languages used")
        return res.slice(0, 3)

    }


}

// console.log(mostlyCommonLang("desc"))
// QUE 4 .e
/**
 * function that find the student who speaks both the languages
 * @param -- two languages (string) 
 * @return -- array of languages with their count
 */


const studentSpeakingLanguages = (lang1, lang2) => {
    return studentsData.filter((studs) => {
        return (
            studs.languages.some((lang) => lang === lang1) &&
            studs.languages.some((lang) => lang === lang2)
        );
    });
};
// console.log("Students who speak both the languages", studentSpeakingLanguages("english", "hindi"))





// QUE 5 REPORT CARD

/**
 * function that prints the report card
 * @param -- 
 * @return -- report card object
 */


const generateReportCard = function() {
        const noOfStudents = Object.keys(studentsData).length
        let distinction = 0
        let num_passed = 0
        let num_failed = 0
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const val = Object.values(marksObj)

            if (val.every((marks) => marks >= 75)) {
                distinction++
                num_passed++
            } else if (val.some((marks) => marks < 40)) {
                num_failed++

            } else {
                num_passed++
            }


        }
        const reportCard = {
            num_Students: noOfStudents,
            num_Passed: num_passed,
            num_Failed: num_failed,
            num_Students_WithDistinction: distinction

        }

        return reportCard

    }
    // console.log("Report card ", generateReportCard())