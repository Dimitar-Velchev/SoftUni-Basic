function easterTrip(arg1, arg2, arg3) {
    let destination = arg1
    let dates = arg2
    let numNights = Number(arg3)
    price = 0
    switch (destination) {
        case "France":
            if (dates === "21-23") {
                price = numNights * 30
            } else if (dates === "24-27") {
                price = numNights * 35
            } else if (dates === "28-31") {
                price = numNights * 40
            }
         break;
        case "Italy":
            if (dates === "21-23") {
                price = numNights * 28
            } else if (dates === "24-27") {
                price = numNights * 32
            } else if (dates === "28-31") {
                price = numNights * 39
            }
         break;
        case "Germany":
            if (dates === "21-23") {
                price = numNights * 32
            } else if (dates === "24-27") {
                price = numNights * 37
            } else if (dates === "28-31") {
                price = numNights * 43
            } 
            break;
    }           
    

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)
}

easterTrip("Italy", "21-23", 7)