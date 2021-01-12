function graduation(input) {
    let name = input.shift();
    let count = 1;
    let totalGrade = 0;
    
    while (count <= 12) {
       
        grade = Number(input.shift());
        if (grade < 4) {
           continue;
        }
        totalGrade +=grade
        count++
    
}
    
        let average = totalGrade /12 
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)} `)
}



graduation([
    "Mimi",
    5,
    6,
    5,
    6,
    5,
    6,
    6,
    2,
    3
    

])