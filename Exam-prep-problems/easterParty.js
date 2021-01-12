function easterParty(arg1, arg2, arg3) {
    let numGuests = Number(arg1)
    let pricePerPerson = Number(arg2)
    let budget = Number(arg3)
    if (numGuests < 10) {
        pricePerPerson = pricePerPerson
    } else if (numGuests <= 15) {
        pricePerPerson -= pricePerPerson * 0.15
    } else if (numGuests <= 20) {
        pricePerPerson -= pricePerPerson * 0.20
    } else if (numGuests > 20) {
        pricePerPerson -= pricePerPerson * 0.25
    }

    let cake = budget * 0.10
    let allexpanse = cake + numGuests * pricePerPerson
    let diff = Math.abs(budget - allexpanse)
    if (budget >= allexpanse) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`)
    } else if (budget < allexpanse) {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`)
    }

}

easterParty(24, 35, 550)