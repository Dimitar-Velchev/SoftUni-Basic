function safari(input) {
    let budget = Number(input[0])
    let litresFuel = Number(input[1])
    let weekDay = input[2]
    let fuelCost = litresFuel * 2.10

    let allExpenses = (fuelCost + 100)
    

    if (weekDay === "Saturday") {
        allExpenses = allExpenses - allExpenses * 0.10
    } else if (weekDay === "Sunday") {
        allExpenses = allExpenses - allExpenses * 0.20

    }

    let diff = Math.abs(allExpenses - budget)

    if (budget >= allExpenses) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`)

    } else if (budget < allExpenses) {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)

    }
}

safari([1000, 10, "Sunday"])