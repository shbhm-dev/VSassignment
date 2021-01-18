let studentsData = [{
        "roll_no": 14,
        "firstName:": "GAURAV",
        "lastName:": "kalra",
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
        "firstName:": "HARMAN DEEP",
        "lastName:": "singh",
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
        "firstName:": "KARAN",
        "lastName:": "bhola",
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

// 1. Find all the students who have received 90 marks in atleast one subject



const atleastOneSubject = function(minmarks) {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const keys = Object.values(marksObj)
            const filteredMarks = keys.filter((marks) => marks > minmarks)
            if (filteredMarks.length > 0) {
                result.push({
                    "roll_no": studentsData[itr].roll_no,
                    "name:": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"])
                })
            }
        }
        console.log(result)
    }
    // atleastOneSubject(90)

const distinctionStudent = function() {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const keys = Object.values(marksObj)

        if (keys.every((marks) => marks >= 75))

            result.push({
            "roll_no": studentsData[itr].roll_no,
            "name:": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"])
        })

    }
    console.log(result)
}



// distinctionStudent()

// QUE 2


const studentRank = function() {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const values = Object.values(marksObj)

        let val = values.reduce(function(total, num) {
            return total + num
        })


        result.push({
            "name": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"]),
            "totalMarks": val
        })



    }

    result.sort(function(a, b) {
        return b.totalMarks - a.totalMarks
    })

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


    console.log(finalarr)
}


// studentRank()

// QUE2 C and D

const best4Marks = function() {

    let result = []
    for (let itr = 0; itr < studentsData.length; itr++) {
        const marksObj = studentsData[itr].marks
        const val = Object.values(marksObj)

        val.sort(function(a, b) {
            return b - a
        })

        let sum = 0;
        for (let itr = 0; itr < 4; itr++) {
            sum += val[itr]
        }


        result.push({
            "name": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"]),
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


    console.log(finalarr)
        // console.log(result)
}

// best4Marks()



// QUE 3
const failedStudents = function() {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const keys = Object.values(marksObj)
            const filteredMarks = keys.filter((marks) => marks < 40)
            if (filteredMarks.length > 0) {
                result.push({
                    "roll_no": studentsData[itr].roll_no,
                    "name:": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"]),
                    "num_backs": filteredMarks.length
                })
            }
        }
        console.log(result)
    }
    // failedStudents()

// QUE 3 Part B
const failedStudentsWithSubjects = function() {

        let result = []
        for (let itr = 0; itr < studentsData.length; itr++) {
            const marksObj = studentsData[itr].marks
            const keys = Object.values(marksObj)

            let failed_subjects = []
            for (const [key, value] of Object.entries(marksObj)) {
                console.log(key)
                if (value < 40) {
                    failed_subjects.push(key)
                }
            }




            result.push({
                "roll_no": studentsData[itr].roll_no,
                "name:": studentsData[itr]["firstName:"].concat(" ", studentsData[itr]["lastName:"]),
                "failed_subjects": failed_subjects
            })

        }
        console.log(result)
    }
    // failedStudentsWithSubjects()

// QUE 4

const mostlyCommonLang = function() {
    let langMap = new Map()
    for (let itr = 0; itr < studentsData.length; itr++) {
        let langArr = studentsData[itr].languages
        for (const lang of langArr) {

            if (langMap.has(lang)) {
                const val = 1 + Number(langMap.get(lang))
                    // console.log(langMap.get(lang))
                    // console.log(langMap[lang])
                langMap.set(lang, val)
            } else {
                langMap.set(lang, 1)
            }

        }

    }
    let res = [...langMap];

    console.log(res)

    console.log("Top 3")
    res.sort(function(a, b) {

        return b[1] - a[1]
    })
    for (let itr = 0; itr < res.length; itr++)
        console.log(res[itr][0])


    // Least 3
    console.log("least 3")
    res.reverse()
    for (let itr = 0; itr < res.length; itr++)
        console.log(res[itr][0])



}

// mostlyCommonLang()



// QUE 5 REPORT CARD

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

    console.log(reportCard)

}
generateReportCard()