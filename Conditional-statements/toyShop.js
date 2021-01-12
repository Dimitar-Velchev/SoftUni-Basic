function toyShop(arg1, arg2, arg3, arg4, arg5, arg6){
    let priceTrip = Number(arg1);
    let puzzles = Number(arg2);
    let dolls = Number(arg3);
    let teddy = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);
    let countToys = puzzles + dolls + teddy + minions + trucks;
    let priceToys = puzzles *2.6 + dolls * 3 + teddy * 4.1 + minions * 8.2 + trucks * 2;
    if(countToys>=50){
        priceToys -=  priceToys * 0.25
    }
    priceToys -=  priceToys * 0.10
    let diff = Math.abs(priceTrip - priceToys)
    
    if(priceToys>=priceTrip){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}

toyShop(320, 8, 2, 5, 5, 1)