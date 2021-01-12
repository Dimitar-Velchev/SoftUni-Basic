function familyTrip(arg1, arg2, arg3, arg4) {
    let budget = Number(arg1)
    let numNights = Number(arg2)
    let priceNight = Number(arg3)
    let otherExpenses = Number(arg4) * budget / 100

    if (numNights > 7) {
        priceNight -= priceNight * 0.05

    }
    let allExpenses = (numNights * priceNight) + otherExpenses
    let diff = Math.abs(budget - allExpenses)
    if(budget>=allExpenses){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else if(budget<allExpenses){
        console.log(`${diff.toFixed(2)} leva needed.`)
    }

}
familyTrip(500, 7, 66, 15)