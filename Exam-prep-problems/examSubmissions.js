function submissions(arg1, arg2) {
    let numStudents = Number(arg1)
    let numProblems = Number(arg2)
    let submissions = numStudents * Math.ceil(numProblems * 2.8)
    let totalSub = (numStudents * Math.floor(numProblems / 3)) + submissions
    let memory = Math.ceil(totalSub / 10) * 5

    console.log(`${memory} KB needed`)
    console.log(`${totalSub} submissions`)
}

submissions(11, 7)