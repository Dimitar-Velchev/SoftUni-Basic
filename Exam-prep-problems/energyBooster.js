function energyBooster(arg1, arg2, arg3) {
    let fruit = arg1
    let size = arg2
    let quantity = Number(arg3)
    let price = 0
    if (size === "small") {
        switch (fruit) {
            case "Watermelon": price = 2 * quantity * 56; break
            case "Mango": price = 2 * quantity * 36.66; break
            case "Pineapple": price = 2 * quantity * 42.10; break
            case "Raspberry": price = 2 * quantity * 20; break
        }
    } else if (size === "big") {
        switch (fruit) {
            case "Watermelon": price = 5 * quantity * 28.70; break
            case "Mango": price = 5 * quantity * 19.60; break
            case "Pineapple": price = 5 * quantity * 24.80; break
            case "Raspberry": price = 5 * quantity * 15.20; break
        }
    }

    if (price >= 400 && price <= 1000) {
        price *= 0.85
    } else if (price > 1000) {
        price *=  0.50
    }

    console.log(price.toFixed(2) + " lv.")
}

energyBooster("Pineapple", "small", 1)