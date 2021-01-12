function graduation(input) {
    let name = input.shift();
    let count = 1;
    let totalGrade = 0;
    let fails = 0
    while (count <= 12) {
       
        let grade = Number(input.shift());
        if (grade < 4) {
            fails++
        }
        totalGrade +=grade
       

        if(fails>1){
            console.log(`${name} has been excluded at ${count-1} grade`)
            break;
        }
        count++
    }
    let average = totalGrade /12 
    if(fails<1){
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)} `)
    }
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