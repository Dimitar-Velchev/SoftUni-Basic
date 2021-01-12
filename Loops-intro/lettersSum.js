function lettersSum(arg1,arg2,arg3){
    let productName = arg1;
    let controlNum = Number(arg2);
    let budget = Number(arg3);
    let result = 0
    for(i=0; i<productName.length; i++){
        if(productName[i]==="a" || productName[i]==="e" || productName[i]==="i"
        || productName[i]==="o" || productName[i]==="u" || productName[i]==="y"){
            result +=3
        } else{
            result +=1
        }
    }

    result *=controlNum
    let change = Math.abs(result - budget).toFixed(2)

    if(budget<result){
        console.log(`Cannot buy ${productName}. Product value: ${result.toFixed(2)}`)
    } else if(budget >= result){
        console.log( `${productName} bought. Money left: ${change}`)
    }

}

lettersSum("milk", 1.4, 8)