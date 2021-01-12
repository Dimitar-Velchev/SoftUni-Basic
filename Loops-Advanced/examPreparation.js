function examPrep(arg1, arg2, arg3) {
    let numStudents = Number(arg1)
    let numProblems = Number(arg2)
    let energyTrainer = Number(arg3)
    let problemCount = 0
    let questions = 0

    while (energyTrainer > 0) {
        energyTrainer += numProblems * 2
        numStudents -= numProblems
        energyTrainer -= numStudents * 2 * 3
        questions += numStudents * 2
        problemCount += numProblems

        if (numStudents < 10) {
            console.log(`The students are too few!`)
            console.log(`Problems solved: ${problemCount} `)
            break;
        } else {
            numStudents += Math.floor(numStudents / 10)
        }

    }
    if(energyTrainer<0 && numStudents>10){
    console.log(`The trainer is too tired!`)
    console.log(`Questions asked: ${questions}`)
    }
}

//examPrep(20, 5, 500)
examPrep(20, 1, 100)