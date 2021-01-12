function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1)
    let roomType = arg2
    let feedback = arg3
    let result = 0
    switch (roomType) {
        case "room for one person": result = (days - 1) * 18; break
        case "apartment":
            if (days < 10) {
                result = (days - 1) * 25 * 0.70
            } else if (days >= 10 && days <= 15) {
                result = (days - 1) * 25 * 0.65
            } else if (days > 15) {
                result = (days - 1) * 25 * 0.50
            };break
        case "president apartment" : 
        if (days < 10) {
            result = (days - 1) * 35 * 0.90
        } else if (days >= 10 && days <= 15) {
            result = (days - 1) * 35 * 0.85
        } else if (days > 15) {
            result = (days - 1) * 35 * 0.80
        };break
    }

    if(feedback ==="positive"){
        result = result * 1.25
    } else if(feedback ==="negative"){
        result = result * 0.90
    }

    console.log(result.toFixed(2))
}

skiTrip(12, "room for one person", "positive")