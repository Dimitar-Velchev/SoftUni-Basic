function vacation(input) {
    let moneyTrip = Number(input.shift());
    let moneyBank = Number(input.shift());
    let moneySaved = 0;
    moneySaved += moneyBank;
    let command = input.shift();
    let money = Number(input.shift());
    let count = 0;
    let spendCount = 0;

    while (moneySaved < moneyTrip) {
        if (command === "spend" && moneySaved >= money) {
            moneySaved -= money;
            spendCount++

        } else if (command === "spend" && moneySaved < money) {
            moneySaved = 0;
            spendCount++
        }

        if (command === "save") {
            moneySaved += money;
            spendCount = 0;

        }

        command = input.shift();
        money = Number(input.shift());
        count++
    }
    if (spendCount == 5) {
        console.log(`You can't save the money.`)
        console.log(`${count}`)
    }

    if (moneySaved >= moneyTrip) {
        console.log(`You saved the money for ${count} days.`)
    }

}

vacation([
    2000,
    1000,
    "spend",
    1200,
    "save",
    2000

])

//vacation([
//    250,
//    150,
//    "spend",
//    50,
//    "spend",
//    50,
//    "save",
//    100,
//    "save",
//    100
//
//])

//vacation([
//    110,
//60,
//"spend",
//10,
//"spend",
//10,
//"spend",
//10,
//"spend",
//10,
//"spend",
//10
//
//])