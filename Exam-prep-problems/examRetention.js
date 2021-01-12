function retention(arg1, arg2) {
    let numStudent = Number(arg1);
    let numSeason = Number(arg2);

    let studentPass = 0;
    let studentRepeat = 0;
    let exam1 = 0
    let exam2 = 0
    let studentLeft = 0


    for (let i = 1; i <= numSeason; i++) {
        if (i % 3 === 0) {
            exam1 = Math.ceil(studentLeft * 0.9);
            exam2 = Math.ceil(exam1 * 0.9);
            studentPass = Math.ceil(exam2 * 0.8);
            studentRepeat = Math.ceil(studentPass * 0.15)
            studentLeft = studentPass + studentRepeat
           
        } else if(i=== 1) {
            exam1 = Math.ceil(numStudent * 0.9);
            exam2 = Math.ceil(exam1 * 0.9);
            studentPass = Math.ceil(exam2 * 0.8);
            studentRepeat = Math.ceil(studentPass * 0.05);
            studentLeft = studentPass + studentRepeat
        } else{
            exam1 = Math.ceil(studentLeft * 0.9);
            exam2 = Math.ceil(exam1 * 0.9);
            studentPass = Math.ceil(exam2 * 0.8);
            studentRepeat = Math.ceil(studentPass * 0.05);
            studentLeft = studentPass + studentRepeat
        }

    }
    console.log(`Students: ${studentLeft}`)
}

retention(100, 6)