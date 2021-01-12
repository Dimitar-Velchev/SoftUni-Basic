function fishTank(arg1, arg2, arg3,arg4){
    let l = arg1
    let w = arg2
    let h = arg3
    let perc = arg4
    perc = perc * 0.01
    let size = (arg1 * arg2 * arg3) * 0.001
    let taken = size * perc
    let result = size - taken
    console.log(result.toFixed(3))
}
fishTank(85, 75, 47, 17)