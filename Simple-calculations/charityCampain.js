function charityCampain(arg1, arg2, arg3, arg4, arg5){
    let numDays = arg1;
    let numPpl = arg2;
    let priceCakes = arg3 * 45;
    let priceGoff = arg4 * 5.80;
    let pricePancakes = arg5 * 3.20;
    let total = numDays * numPpl * (priceCakes + priceGoff + pricePancakes);
    let profit = total - total / 8;
    console.log(profit.toFixed(2));
}

charityCampain(20, 8, 14, 30, 16)