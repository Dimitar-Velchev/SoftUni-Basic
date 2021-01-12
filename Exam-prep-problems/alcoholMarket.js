function alcoholMarket(arg1, arg2, arg3, arg4, arg5){
    let priceWhiskey = arg1;
    let lBeer = arg2;
    let lWine = arg3;
    let lRakia = arg4;
    let lWhiskey = arg5;
    let priceRakia = priceWhiskey / 2;
    let priceBeer = priceRakia - priceRakia * 0.8;
    let priceWine = priceRakia - priceRakia * 0.4;
    let total = priceWhiskey * lWhiskey + priceBeer * lBeer +
    priceRakia * lRakia + priceWine * lWine;
    console.log(total.toFixed(2)); 
}

alcoholMarket(50, 10, 3.5, 6.5, 1)