function converter(arg1, arg2, arg3){
    let number = Number(arg1)
    let inputType = arg2
    let outputType = arg3

    if(inputType ==="mm"){
        number = number / 1000
    }else if(inputType==="cm"){
        number = number / 100
    }

    if(outputType==="mm"){
        number = number * 1000
    }else if(outputType==="cm"){
        number = number * 100
    }
console.log(number.toFixed(3))
}
converter(12, "cm", "mm")