function tennisEquipment(arg1, arg2, arg3){
    let priceRackets = Number(arg1)
    let numRackets = Number(arg2)
    let numShoes = Number(arg3)
    let priceShoes = Number(priceRackets / Number(6))
    let priceOther = Number(priceRackets * numRackets + priceShoes * numShoes) * Number(0.2)
    let total = Number(priceRackets * numRackets + priceShoes * numShoes + priceOther)
    let djokovic = Math.floor(total / Number(8))
    let  sponsors = Math.ceil((total / 8) * 7)
    console.log(`Price to be paid by Djokovic ${djokovic}`)
    console.log(`Price to be paid by sponsors ${sponsors}`)
}

tennisEquipment(1000, 3, 1)