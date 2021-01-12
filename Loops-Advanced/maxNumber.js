function maxNumber(input) {
    let totalCount = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let count = 0
    while (count < totalCount) {
        count++
        let num = Number(input.shift());
        if (num > maxNumber) {
            maxNumber = num
        }
    }
    console.log(maxNumber)
}

maxNumber([
    2,100,99
])