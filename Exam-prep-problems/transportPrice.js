function transportPrice(arg1, arg2){
    let kilometers = Number(arg1)
    let dayOrNight = arg2
    let price = 0
    let taxiRate = 0
    if(dayOrNight==="day"){
        taxiRate = 0.79
    } else{
        taxiRate = 0.90
    }

    if(kilometers<20){
        price = 0.70 + (kilometers * taxiRate)
    } else if(kilometers <100){
        price = kilometers * 0.09
    } else{
        price = kilometers * 0.06
    }
console.log(price)
}

transportPrice(5, "day")