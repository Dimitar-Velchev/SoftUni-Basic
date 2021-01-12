function sumOfSeries(arg){
    let n = Number(arg);
    let sum = 0
    for( let i = 1; i <=n; i++){
        sum += i * i
    }
console.log(sum)

}

sumOfSeries(4)