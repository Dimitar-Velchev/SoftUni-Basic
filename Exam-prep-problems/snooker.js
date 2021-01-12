function snooker(input) {
    let FinaleStage = input[0];
    let TicketType = input[1];
    let numTickets = Number(input[2]);
    let photo = input[3];
    let price = 0
    let photoprice = numTickets * 40

    switch (FinaleStage) {
        case "Quarter final":
            if (TicketType === "Standard") {
                price = numTickets * 55.50
            } else if (TicketType === "Premium") {
                price = numTickets * 105.20
            } else if (TicketType === "VIP") {
                price = numTickets * 118.90
            } break;
        case "Semi final":
            if (TicketType === "Standard") {
                price = numTickets * 75.88
            } else if (TicketType === "Premium") {
                price = numTickets * 125.22
            } else if (TicketType === "VIP") {
                price = numTickets * 300.40
            } break;
        case "Final":
            if (TicketType === "Standard") {
                price = numTickets * 110.10
            } else if (TicketType === "Premium") {
                price = numTickets * 160.66
            } else if (TicketType === "VIP") {
                price = numTickets * 400.00
            } break;
    }

    if (price > 4000) {
        price *= 0.75

    } else if (price > 2500 && price <= 4000 && photo === "Y") {
        price = price * 0.90 + photoprice
    } else if (price > 2500 && photo === "N") {
        price *= 0.90;
    }else if (photo === "Y"){
        price += photoprice;
    }

    console.log(price.toFixed(2))
}

snooker(["Final", "Premium", 25, "Y"])
//snooker(["Semi final", "VIP", 9, "Y"])
//snooker(["Quarter final", "Standard", 11, "N"])