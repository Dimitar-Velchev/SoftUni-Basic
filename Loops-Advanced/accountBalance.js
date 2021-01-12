function accountBalance(input) {
    let transactionCount = Number(input.shift());

    let currentTransactionCount = 1;
    let total = 0;
    while(currentTransactionCount<=transactionCount){
        let transaction = Number(input.shift());
        if(transaction<0){
            console.log(`Invalid operation!`)
            break;
        }
        console.log(`Increase: ${transaction.toFixed(2)}`)
        total +=transaction
        currentTransactionCount++

    }
    console.log(`Total: ${total.toFixed(2)}`)
}

accountBalance([
    3,
5.51,
69.42,
100

])