function lotteryStatistics(arg) {
    let n = Number(arg);
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0

    for (i = 1; i <= n; i++) {
        if (i < 10 && i % 2 === 1) {
            sum1++;
       }   
        if (i % 2 === 0) {
            sum2++;
        }
        if (i % 2 === 1 && (i === 7 || i % 10 === 7)) {
            sum3++;
        }
        if (100 % i === 0) {
            sum4++;
        }
    }
    console.log(`${((sum1 / n) * 100).toFixed(2)}%`)
    console.log(`${((sum2 / n) * 100).toFixed(2)}%`)
    console.log(`${((sum3 / n) * 100).toFixed(2)}%`)
    console.log(`${((sum4 / n) * 100).toFixed(2)}%`)
}

lotteryStatistics(49)