function oscarWeek(arg1, arg2, arg3) {
    let filmName = arg1;
    let salonType = arg2;
    let numTickets = Number(arg3);
    let price = 0
    switch (filmName) {
        case "A Star Is Born":
            if (salonType === "normal") {
                price = 7.50
            } else if (salonType === "luxury") {
                price = 10.50
            } else if (salonType === "ultra luxury") {
                price = 13.50
            }
            break;
        case "Bohemian Rhapsody":
            if (salonType === "normal") {
                price = 7.35
            } else if (salonType === "luxury") {
                price = 9.45
            } else if (salonType === "ultra luxury") {
                price = 12.75
            }
            break;
        case "Green Book":
            if (salonType === "normal") {
                price = 8.15
            } else if (salonType === "luxury") {
                price = 10.25
            } else if (salonType === "ultra luxury") {
                price = 13.25
            }
            break;
        case "The Favourite":
            if (salonType === "normal") {
                price = 8.75
            } else if (salonType === "luxury") {
                price = 11.55
            } else if (salonType === "ultra luxury") {
                price = 13.95
            }
            break;
    }
    price = (price * numTickets).toFixed(2)

    console.log(`${filmName} -> ${price} lv.`)
}

oscarWeek("Green Book", "normal", 63)