function journey(arg1, arg2) {
    let budget = Number(arg1)
    let season = arg2
    let destination = ""
    let price = 0
    let trip = ""

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            price = budget * 0.3
        } else if (season === "winter") {
            price = budget * 0.7
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            price = budget * 0.4
        } else if (season === "winter") {
            price = budget * 0.8
        }
    } else if (budget > 1000) {
        destination = "Europe"
        price = budget * 0.90

    }

    if (season === "summer" && destination !== "Europe") {
        trip = "Camp"
    } else {
        trip = "Hotel"
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${trip} - ${price.toFixed(2)}`)


}

journey(1500, "summer")