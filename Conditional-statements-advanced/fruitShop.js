function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1
    let dayOfWeek = arg2
    let quantity = Number(arg3)
    let result = 0
    let isError = false
    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" ||
        dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        switch (fruit) {
            case "banana": result = quantity * 2.50; break
            case "apple": result = quantity * 1.20; break
            case "orange": result = quantity * 0.85; break
            case "grapefruit": result = quantity * 1.45; break
            case "kiwi": result = quantity * 2.70; break
            case "pineapple": result = quantity * 5.50; break
            case "grapes": result = quantity * 3.85; break
            default: isError = true
        }


    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        switch (fruit) {
            case "banana": result = quantity * 2.70; break
            case "apple": result = quantity * 1.25; break
            case "orange": result = quantity * 0.90; break
            case "grapefruit": result = quantity * 1.60; break
            case "kiwi": result = quantity * 3.00; break
            case "pineapple": result = quantity * 5.60; break
            case "grapes": result = quantity * 4.20; break
            default: isError = true}
        } else {
            isError = true
        }

        if(!isError){
            console.log(result.toFixed(2))
        }else{
            console.log("error")
        }

    }

    fruitShop("orange", "Sunday", 3)