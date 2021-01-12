function numberInRange(number){
    let num = Number(number);
    if(num>= -100 && num <=100 && num !== 0){
        console.log("Yes")
    } else{
        console.log("No")
    }
}

numberInRange()