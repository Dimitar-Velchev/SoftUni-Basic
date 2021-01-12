function easterGuests(arg1, arg2) {
    let numGuests = Number(arg1)
    let budget = Number(arg2)
    let numKozunak = Math.ceil(numGuests / 3)
    let numEggs = numGuests * 2
    let kozunakCost = numKozunak * 4
    let eggsCost = numEggs * 0.45
    let allExpenses = kozunakCost + eggsCost
    let diff = Math.abs(allExpenses - budget)

    if (budget >= allExpenses) {
        console.log(`Lyubo bought ${numKozunak} Easter bread and ${numEggs} eggs.`)
        console.log(`He has ${diff.toFixed(2)} lv. left.`)
    } else if (budget < allExpenses) {
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)

    }
}

easterGuests(9, 12)