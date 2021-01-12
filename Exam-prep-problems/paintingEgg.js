function paintingEggs(arg1, arg2, arg3) {
    let sizeEggs = arg1
    let colourEggs = arg2
    let numBatches = Number(arg3)
    let price = 0
    switch (colourEggs) {
        case "Red": if (sizeEggs === "Large") {
            price = numBatches * 16
        } else if (sizeEggs === "Medium") {
            price = numBatches * 13
        } else if (sizeEggs === "Small") {
            price = numBatches * 9
        }
            break;
        case "Green": if (sizeEggs === "Large") {
            price = numBatches * 12
        } else if (sizeEggs === "Medium") {
            price = numBatches * 9
        } else if (sizeEggs === "Small") {
            price = numBatches * 8
        }
            break;
        case "Yellow": if (sizeEggs === "Large") {
            price = numBatches * 9
        } else if (sizeEggs === "Medium") {
            price = numBatches * 7
        } else if (sizeEggs === "Small") {
            price = numBatches * 5
        }
            break;
    }
price = (price * 0.65).toFixed(2)
console.log(`${price} leva.`)
}

paintingEggs("Medium", "Green", 5)
