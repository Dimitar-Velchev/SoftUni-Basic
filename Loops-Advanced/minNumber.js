function minNumber(input){
    let countNum = Number(input.shift());
    let count = 0
    let minNumber = Number.MAX_SAFE_INTEGER
    while(count<countNum){
        count++
        let num = Number(input.shift());
        if(num<minNumber){
            minNumber = num

        }
    }
    console.log(minNumber)
}

minNumber([
  3, -10, 20, -30
])