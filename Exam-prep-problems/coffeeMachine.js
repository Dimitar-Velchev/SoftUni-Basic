function coffeeMachine(arg1, arg2, arg3) {
    let drink = arg1;
    let sugar = arg2;
    let numDrinks = Number(arg3);
    let price = 0;
    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = 0.90;
            } else if (sugar === "Normal") {
                price = 1;
            } else if (sugar === "Extra") {
                price = 1.20;
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = 1.00;
            } else if (sugar === "Normal") {
                price = 1.20;
            } else if (sugar === "Extra") {
                price = 1.60;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                price = 0.50;
            } else if (sugar === "Normal") {
                price = 0.60;
            } else if (sugar === "Extra") {
                price = 0.70;
            }
            break
    }
let totalPrice = price * numDrinks
    if(sugar === "Without"){
        totalPrice = totalPrice * 0.65
    }

    if(drink === "Espresso" && numDrinks>=5){
       totalPrice = totalPrice * 0.75
    }
    if(totalPrice>15){
        totalPrice = totalPrice * 0.80
    }

    console.log(`You bought ${numDrinks} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`)
}

coffeeMachine("Tea", "Extra", 3)