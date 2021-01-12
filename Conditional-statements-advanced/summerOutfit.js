function summerOutfit(arg1, arg2) {
    let temperature = Number(arg1);
    let partOfDay = arg2;
    let outfit = "";
    let shoes = "";
    switch (partOfDay) {
        case "Morning":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals"
            }
            break;
        case "Afternoon":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot"
            }
            break;
        case "Evening":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins"
            }
            break;
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)

}

summerOutfit(22, "Afternoon")