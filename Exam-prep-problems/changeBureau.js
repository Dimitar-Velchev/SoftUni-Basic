function changeBureau(arg1, arg2, arg3){
let bitcoin = Number(arg1)
let yuan = Number(arg2)
let comission = Number(arg3) 
comission = comission * 0.01
let alleuro = (arg2 * 0.15 * 1.76 + arg1 * 1168) / 1.95
let charge = alleuro * comission 
let result = alleuro - charge
console.log(result.toFixed(2))
}

changeBureau(20, 5678, 2.4)