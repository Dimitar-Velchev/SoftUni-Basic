function yardGreening(arg1){
let totalArea = arg1
let totalPrice = arg1 * 7.61
let discount = (totalPrice * 0.18).toFixed(2)
let finalPrice = (totalPrice - discount).toFixed(2)


   console.log(`The final price is: ${finalPrice} lv.`)
   console.log(`The discount is: ${discount} lv.`)

}

yardGreening(540)