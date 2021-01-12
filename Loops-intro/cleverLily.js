function cleverLily(arg1, arg2, arg3){
    let lilyAge = Number(arg1);
    let priceWasher = Number(arg2);
    let priceToy = Number(arg3);
    let countToys = 0;
    let savedMoney = 0;
    let lastBirthday = 0
    for(year = 1; year <= lilyAge; year++){
        if(year % 2 === 1){
            countToys +=1;
        } else{
            savedMoney += lastBirthday + 9;
            lastBirthday += 10;
        }
    }
    let soldToys = priceToy * countToys;
    let totalMoneySaved = soldToys + savedMoney;
    let moneyDiff = Math.abs(totalMoneySaved - priceWasher).toFixed(2)

    if(totalMoneySaved>=priceWasher){
        console.log(`Yes! ${moneyDiff}`)
    }else{
        console.log(`No! ${moneyDiff}`)
    }


}

cleverLily(10, 170.00, 6)