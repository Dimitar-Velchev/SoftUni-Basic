function hotelRoom(arg1, arg2) {
    let month = arg1
    let numDays = Number(arg2)
    let priceApartment = 0
    let priceStudio = 0
    let typeRoom = ""
    if (month === "May" || month === "October") {
        typeRoom === "Studio"
        priceStudio = numDays * 50
        typeRoom === "Apartment"
        priceApartment = numDays * 65

    }
    if (month === "June" || month === "September") {
        typeRoom === "Studio"
        priceStudio = numDays * 75.20
        typeRoom === "Apartment"
        priceApartment = numDays * 68.70

    }
    if (month === "July" || month === "August") {
        typeRoom === "Studio"
        priceStudio = numDays * 76
        typeRoom === "Apartment"
        priceApartment = numDays * 77

    }
    if (numDays > 14 && (month === "May" || month === "October")) {
        priceStudio = priceStudio * 0.70
    }
    else if (numDays > 7 && (month === "May" || month === "October")) {
        priceStudio = priceStudio * 0.95
    }

    if (numDays > 14 && (month === "June" || month === "September")) {
        priceStudio = priceStudio * 0.80
    }
    if (numDays > 14) {
        priceApartment = priceApartment * 0.90
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}

hotelRoom("June", 14)