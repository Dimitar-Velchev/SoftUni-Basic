function petShop(arg1, arg2){
    let dogFood = Number(arg1 * 2.5)
    let otherFood = Number(arg2 * 4)
    let result = Number(dogFood + otherFood)
    console.log(result.toFixed(2)+" lv.")
}

petShop(13, 9)