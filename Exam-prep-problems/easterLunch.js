function easterLunch(arg1, arg2, arg3){
    let kozunak = Number(arg1 * 3.20)
    let eggTrays = Number(arg2 * 4.35)
    let cookies = Number(arg3 * 5.40)
    let colour = Number(arg2 * 12 * 0.15)
    let total = Number(kozunak + eggTrays + cookies + colour)
    console.log(total.toFixed(2))
}

easterLunch(3,2,3)

