function newHouse(arg1, arg2, arg3) {
    let typeFlower = arg1;
    let countFlower = Number(arg2);
    let budget = Number(arg3);
    let price = 0
    switch (typeFlower) {
        case "Roses":
            price = countFlower * 5;
            if (countFlower > 80) {
                price = price * 0.90
            } break;
        case "Dahlias":
            price = countFlower * 3.80
            if (countFlower > 90) {
                price = price * 0.85
            } break;
        case "Tulips":
            price = countFlower * 2.80
            if (countFlower > 80) {
                price = price * 0.85
            } break;
        case "Narcissus":
            price = countFlower * 3
            if (countFlower < 120) {
                price = price * 1.15
            } break;
        case "Gladiolus":
            price = countFlower * 2.50
            if (countFlower < 80) {
                price = price * 1.20
            } break;

    }

    let change = Math.abs(budget - price).toFixed(2);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${change} leva left.`)
    } else {
        console.log(`Not enough money, you need ${change} leva more.`)
    }

}

newHouse("Tulips", 88, 260)