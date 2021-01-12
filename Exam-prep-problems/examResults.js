function results(input) {
    let studentName = input.shift();
    let totalResult = 0
    let grade = 0
    let isCheat = false
    while (studentName !== "Midnight") {
        totalResult = 0;
        let result = ""
        for (let problem = 1; problem <= 6; problem++) {
            result = Number(input.shift())

            if (result < 0) {
                console.log(`${studentName} was cheating!`)
                isCheat = true
                break;
            } else {
                totalResult += result
            }

        }

        let totalResultFinal = Math.floor(totalResult / 600 * 100)
        let grade = totalResultFinal * 0.06

        if (grade < 3) {
            grade = 2
        }
        if (grade >= 5) {
            console.log(`===================`)
            console.log(`|   CERTIFICATE   |`)
            console.log(`|    ${grade.toFixed(2)}/6.00    |`)
            console.log(`===================`)
            console.log(`Issued to ${studentName}`)
        } else if (grade < 5 && isCheat === false) {
            console.log(`${studentName} - ${grade.toFixed(2)}`)
        }

        studentName = input.shift();
    }
}

results(['Andy', '50', '50', '20', '10', '10', '0', 'Midnight'])
