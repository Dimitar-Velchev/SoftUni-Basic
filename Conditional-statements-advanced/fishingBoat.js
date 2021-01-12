function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1)
    let season = arg2
    let numFisherman = Number(arg3)
    let price = 0
    switch (season) {
        case "Spring": price = 3000; break
        case "Summer":
        case "Autumn": price = 4200; break
        case "Winter": price = 2600; break
    }

    if(numFisherman<=6){
        price = price * 0.90
    } else if(numFisherman >= 7 && numFisherman <=11){
        price = price * 0.85
    } else if(numFisherman>=12){
        price = price * 0.75
    }

    if(numFisherman % 2 === 0 && season != "Autumn"){
        price = price * 0.95
    }

    let diff= Math.abs(budget - price).toFixed(2)

    if(budget>=price){
        console.log(`Yes! You have ${diff} leva left.`)
    }else if(budget<price){
        console.log(`Not enough money! You need ${diff} leva.`)
    }

}

fishingBoat(3600, "Autumn", 6)