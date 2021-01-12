function operations(arg1, arg2, arg3) {
    let N1 = Number(arg1)
    let N2 = Number(arg2)
    let operator = arg3
    let result = 0
    let evenOrOdd = ""

   
    if (operator === "+") {
        result = N1 + N2
        if(result % 2 === 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd  = "odd"
        }
        console.log(`${N1} + ${N2} = ${result} - ${evenOrOdd}`)
    } else if (operator === "-") {
        result = N1 - N2
        if(result % 2 === 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd  = "odd"
        }
        console.log(`${N1} - ${N2} = ${result} - ${evenOrOdd}`)
    } else if (operator === "*") {
        result = N1 * N2
        if(result % 2 === 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd  = "odd"
        }
        console.log(`${N1} * ${N2} = ${result} - ${evenOrOdd}`)
    } else if (operator === "/" && N2 != 0) {
        result = (N1 / N2).toFixed(2)
        console.log(`${N1} / ${N2} = ${result}`)
    } else if (operator === "%" && N2 != 0) {
        result = N1 % N2
        console.log(`${N1} % ${N2} = ${result}`)
    }

    if (N2 === 0 && (operator === "/" || operator === "%")) {
        console.log(`Cannot divide ${N1} by zero`)
    }

}
operations(10, 12, "+")