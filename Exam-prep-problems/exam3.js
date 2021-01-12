function harvest(arg1, arg2, arg3) {
    let typeFlower = arg1;
    let numFlower = Number(arg2);
    let season = arg3;
    let honey = 0;

    switch (season) {
        case "Spring":
            if (typeFlower === "Sunflower") {
                honey += 10 * numFlower;
            } else if (typeFlower === "Daisy"){
                honey += 12 * numFlower * 1.10;
            }else if (typeFlower === "Lavender"){
                honey +=12 *numFlower;
            }else if (typeFlower === "Mint"){
                honey += 10 * numFlower * 1.10;
            }
            break;
        case "Summer":
            if (typeFlower === "Sunflower") {
                honey += 8 * numFlower * 1.10;
            } else if (typeFlower === "Daisy"){
                honey += 8 * numFlower * 1.10;
            }else if (typeFlower === "Lavender"){
                honey +=8 *numFlower * 1.10;
            }else if (typeFlower === "Mint"){
                honey += 12 * numFlower * 1.10;
            }
            break;
        case "Autumn":
            if (typeFlower === "Sunflower") {
                honey += 12 * numFlower * 0.95;
            } else if (typeFlower === "Daisy"){
                honey += 6 * numFlower * 0.95;
            }else if (typeFlower === "Lavender"){
                honey +=6 *numFlower * 0.95;
            }else if (typeFlower === "Mint"){
                honey += 6 * numFlower * 0.95;
            }
            break;
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`)
}
harvest(
    "Sunflower",
    "11",
    "Autumn"
    )