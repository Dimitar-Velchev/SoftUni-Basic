function trainers(input){
    let countJury = Number(input.shift());
    let presentationName = input.shift();
    let finalAssessment = 0;
    let countGrade = 0;

    while(presentationName !== "Finish"){
        let averageGrade = 0;
        for(i=0; i<countJury; i++){
            let grade = Number(input.shift());
            averageGrade +=grade;
            finalAssessment +=grade;
            countGrade++
        }
        console.log(`${presentationName} - ${(averageGrade/countJury).toFixed(2)}.`);
        presentationName = input.shift()
    }
    console.log(`Student's final assessment is ${(finalAssessment/countGrade).toFixed(2)}.`)
}

