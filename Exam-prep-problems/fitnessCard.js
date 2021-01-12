function fitnessCard(arg1, arg2, arg3, arg4) {
    let moneyInCard = Number(arg1)
    let gender = arg2
    let age = Number(arg3)
    let sport = arg4
    let result = 0
    if (gender === "m") {
        switch (sport) {
            case "Gym": result = 42; break
            case "Boxing": result = 41; break
            case "Yoga": result = 45; break
            case "Zumba": result = 34; break
            case "Dances": result = 51; break
            case "Pilates": result = 39; break

        }
    } else if (gender === "f") {
        switch (sport) {
            case "Gym": result = 35; break
            case "Boxing": result = 37; break
            case "Yoga": result = 42; break
            case "Zumba": result = 31; break
            case "Dances": result = 53; break
            case "Pilates": result = 37; break

        }
    }

    if (age <= 19) {
        result = result * 0.80
    }

    let diff = Math.abs(moneyInCard - result)

    if (moneyInCard >= result) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`)
    }
}

fitnessCard(20, "f", 15, "Yoga")