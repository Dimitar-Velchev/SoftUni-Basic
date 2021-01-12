function easterBakery(arg1, arg2, arg3, arg4, arg5){
    let priceFlour = Number(arg1)
    let kgFlour = Number(arg2)
    let kgSugar = Number(arg3)
    let priceSugar = Number(priceFlour - priceFlour * 0.25)
    let eggs = Number(arg4)
    let priceEggs = Number(priceFlour + priceFlour * 0.1)
    let yeast = Number(arg5)
    let yeastPrice = Number(priceSugar - priceSugar * 0.8)
    let total = Number(priceFlour * kgFlour + kgSugar * priceSugar + eggs * 
        priceEggs + yeast * yeastPrice)
        console.log(total.toFixed(2))
}

easterBakery(50, 10, 3.5, 6, 1)