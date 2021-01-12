function sumNumbers(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinations = 0;
    let flag = false;
    for (let leftNum = start; leftNum <= end; leftNum++) {
        for (let rightNum = start; rightNum <= end; rightNum++) {
            combinations++;
            if ((leftNum + rightNum) === magicNumber) {
                console.log(`Combination N:${combinations} (${leftNum} + ${rightNum} = ${magicNumber})`);
                
                flag = true;
                break;
            }

        }
        if (flag) {
            break;
        }
    }
    if (flag === false) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }
}

sumNumbers([23, 24, 20])