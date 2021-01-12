function converter (arg1){
    let radians = arg1
    let degree = radians * 180 / Math.PI
    console.log(degree.toFixed(0))
}

converter(3.1416)



//градус = радиан * 180 / π