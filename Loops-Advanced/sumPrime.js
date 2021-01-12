function prime(input) {
    let n = input.shift();

    let sumOfprimeNumber = 0;
    let sumOfNoPrimeNumber = 0;

    while (n != "stop") {
        n = Number(n);
        let prime = true;

        if (n < 0) {
            console.log(`Number is negative.`)
            n = input.shift();
            continue;
        }
        let maxDivider = Math.sqrt(n);

        for (let i = 2; i <= maxDivider; i++) {
            if (n % i == 0){
                prime = false;
                break;
            }
        }
        if (prime){
            sumOfprimeNumber += n;
        }else{
            sumOfNoPrimeNumber +=n;
        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumOfprimeNumber} `)
    console.log(`Sum of all non prime numbers is: ${sumOfNoPrimeNumber}`)
}
prime([
    '3', '9',
    '0', '7',
    '19', '4',
    'stop'
])