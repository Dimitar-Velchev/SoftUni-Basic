function eggShop(input) {
    let numEggsAvailable = Number(input.shift());
    let command = input.shift();
    let amount = Number(input.shift());
    let eggsSold = 0;

    while (command !== undefined) {
        if (command === "Close") {
            console.log(`Store is closed!`)
            console.log(`${eggsSold} eggs sold.`)
        } else if (numEggsAvailable < amount && command === "Buy") {
            console.log(`Not enough eggs in store!`)
            console.log(`You can buy only ${numEggsAvailable}.`)
        }

        if (command === "Buy") {
            numEggsAvailable -= amount
            eggsSold += amount
        } else if (command === "Fill") {
            numEggsAvailable += amount
        }
        command = input.shift();
        amount = Number(input.shift());

    }

}

eggShop(
    [
        '20', 'Fill',
        '30', 'Buy',
        '15', 'Buy',
        '20', 'Close'
    ]

)