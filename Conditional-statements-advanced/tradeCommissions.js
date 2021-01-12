function tradeCommissions(arg1, arg2) {
    let city = arg1
    let quantitySales = Number(arg2)
    let result = 0
    let isError = false
    if (city === "Sofia") {
        if (quantitySales >= 0 && quantitySales <= 500) {
            result = quantitySales * 0.05
        } else if (quantitySales > 500 && quantitySales <= 1000) {
            result = quantitySales * 0.07
        } else if (quantitySales > 1000 && quantitySales <= 10000) {
            result = quantitySales * 0.08
        } else if (quantitySales > 10000) {
            result = quantitySales * 0.12
        }

    } else if (city === "Varna") {
        if (quantitySales >= 0 && quantitySales <= 500) {
            result = quantitySales * 0.045
        } else if (quantitySales > 500 && quantitySales <= 1000) {
            result = quantitySales * 0.075
        } else if (quantitySales > 1000 && quantitySales <= 10000) {
            result = quantitySales * 0.1
        } else if (quantitySales > 10000) {
            result = quantitySales * 0.13
        }

    } else if (city === "Plovdiv") {
        if (quantitySales >= 0 && quantitySales <= 500) {
            result = quantitySales * 0.055
        } else if (quantitySales > 500 && quantitySales <= 1000) {
            result = quantitySales * 0.08
        } else if (quantitySales > 1000 && quantitySales <= 10000) {
            result = quantitySales * 0.12
        } else if (quantitySales > 10000) {
            result = quantitySales * 0.145
        }

    } else {
        isError = true

    }

    if (quantitySales < 0) {
        isError = true
    }
if(!isError){
    console.log(result.toFixed(2))
}else{
    console.log("error")
}

}

tradeCommissions("Varna", 3874.50)