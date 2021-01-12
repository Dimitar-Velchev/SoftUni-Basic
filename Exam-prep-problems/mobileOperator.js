function mobileOperator(arg1, arg2, arg3, arg4) {
    let contractLenght = arg1
    let contractType = arg2
    let internet = arg3
    let numMonths = Number(arg4)
    let price = 0
    switch (contractType) {
        case "Small":
            if (contractLenght === "one") {
                price = 9.98
            } else if (contractLenght === "two") {
                price = 8.58
            }
            break;
        case "Middle":
            if (contractLenght === "one") {
                price = 18.99
            } else if (contractLenght === "two") {
                price = 17.09
            }
            break;
        case "Large":
            if (contractLenght === "one") {
                price = 25.98
            } else if (contractLenght === "two") {
                price = 23.59
            }
            break;
        case "ExtraLarge":
            if (contractLenght === "one") {
                price = 35.99
            } else if (contractLenght === "two") {
                price = 31.79
            }
            break;
    }
    if (internet === "yes" && price <= 10) {
        price += 5.50
    } else if (internet === "yes" && price <= 30) {
        price += 4.35
    } else if (internet === "yes" && price > 30) {
        price += 3.85
    }
    
    let totalPrice = numMonths * price
    
    if (contractLenght === "two") {
        totalPrice -= totalPrice * 0.0375
    }

    console.log(`${totalPrice.toFixed(2)} lv.`)
}

mobileOperator("two", "ExtraLarge", "yes", 20)