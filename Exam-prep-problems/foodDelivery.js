function foodDelivery(arg1, arg2, arg3){
    let chickenMenu = Number(arg1 * 10.35)
    let fishMenu = Number(arg2 * 12.40)
    let veganMenu = Number(arg3 * 8.15)
    let dessert = Number(chickenMenu + fishMenu + veganMenu) * 0.2
    let delivery = Number(2.5)
    let total = Number(chickenMenu + fishMenu + veganMenu + dessert + delivery)
    console.log("Total: " + total.toFixed(2))
}

foodDelivery(2, 4, 3)