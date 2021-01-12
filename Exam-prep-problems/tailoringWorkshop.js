function workshop (arg1, arg2, arg3){
    let numTables = arg1;
    let length = arg2;
    let width = arg3;
    let totalCloth = numTables * ((length + 2 * 0.30) * (width + 2 * 0.30));
    let totalSquares = numTables * (length/2 * length/2);
    let priceUSD = totalCloth * 7 + totalSquares * 9
    let priceBGN = priceUSD * 1.85
    console.log(`${priceUSD.toFixed(2)} USD`)
    console.log(`${priceBGN.toFixed(2)} BGN`)   
}

workshop(5, 1.00, 0.50)