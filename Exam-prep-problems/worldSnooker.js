function snooker(arg1, arg2, arg3, arg4) {
    let stage = arg1
    let ticketType = arg2
    let numTickets = Number(arg3)
    let photo = arg4
    let price = 0
    let isFree = false
    switch (stage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                price = 55.50
            } else if (ticketType === "Premium") {
                price = 105.20
            } else if (ticketType === "VIP") {
                price = 118.90
            }
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                price = 75.88
            } else if (ticketType === "Premium") {
                price = 125.22
            } else if (ticketType === "VIP") {
                price = 300.40
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                price = 110.10
            } else if (ticketType === "Premium") {
                price = 160.66
            } else if (ticketType === "VIP") {
                price = 400
            }
            break;
    }
    let pricePhoto = numTickets * 40
    let totalPrice

    if (photo === "Y") {
        totalPrice = numTickets * price + pricePhoto
    } else if (photo === "N") {
        totalPrice = numTickets * price
    }

    if (totalPrice > 4000 && photo === "Y") {
        isFree = true
        totalPrice =  (totalPrice - pricePhoto) * 0.75
    } else if(totalPrice> 4000){
        totalPrice = totalPrice * 0.75
    }else if(totalPrice>2500){
        totalPrice = totalPrice * 0.90
    }


if(!isFree){
    console.log(`${totalPrice.toFixed(2)}`)
} else {
    console.log()
}

}
snooker("Semi final", "VIP", 9, "Y")