function examPrep(input) {
    let numFails = Number(input.shift());
    let count = 0;
    let totalGrade = 0;
    let current = "";
    let fails = 0;
    let command = input.shift();

    while (command !== "Enough") {
        if(command !=="Enough"){
            current = command;
        }
        let grade = Number(input.shift());
        command = input.shift();
        count++
        totalGrade += grade;
       

        if (grade <= 4) {
            fails++
        }

        if(fails === numFails){
            console.log(`You need a break, ${fails} poor grades.`)
            break;
        }

    }
    let average = totalGrade / count;
    if(command === "Enough"){
    console.log(`Average score: ${average.toFixed(2)}`)
    console.log(`Number of problems: ${count}`)
    console.log(`Last problem: ${current}`)
    }
}

examPrep([
 3,
 "Money",
 6,
 "Story",
 4,
 "Spring Time",
 5,
 "Bus",
 6,
 "Enough"])

//examPrep([
//    2,
//"Income",
//3,
//"Game Info",
//6,
//"Best Player",
//4
//
//])