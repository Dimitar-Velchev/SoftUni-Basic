function careOfPuppy(input) {
    let foodAvailableInKg = Number(input.shift());
    let foodAvailableInGrams = foodAvailableInKg * 1000;
    let foodNeeded = 0;
    let command = input.shift();
    while(command !== "Adopted"){
        foodNeeded +=Number(command);
        command = input.shift();

    }
    let diff=Math.abs(foodAvailableInGrams - foodNeeded)

    if(foodNeeded<=foodAvailableInGrams){
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    }else{
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }
}

careOfPuppy(
    [
        '2',   '999',
        '456', '999',
        '999', '123',
        '456', 'Adopted',
        '',    ''
      ]
      
)