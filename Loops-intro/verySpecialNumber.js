function verySpecialNumber(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);
    let numberPow = Math.pow(n, 2)
    for (let i = start; i <= end; i++) {
        if (i % numberPow === 0) {
            console.log(`Very special number: ${i}`)
        } else if (i % n === 0) {
            console.log(`Special number: ${i}`)
        } else {
            console.log(i)
        }
    }
    }

    verySpecialNumber(1, 25, 3)