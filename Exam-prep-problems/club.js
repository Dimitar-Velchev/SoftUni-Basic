function club(input) {
    let profitTarget = Number(input.shift());
    let coctail = input.shift();
    let numCoctails = Number(input.shift());

    let totalPrice = 0;
    let currentPrice = 0;


    while (coctail !== undefined) {
        if(coctail === "Party!"){
            let diff = profitTarget - totalPrice
            console.log(`We need ${diff.toFixed(2)} leva more.`)
            break;
        }
        let pricePerCoctail = coctail.length;
        currentPrice = pricePerCoctail * numCoctails;
        
        if(currentPrice % 2 === 1){
         currentPrice *=0.75;
        }

        totalPrice += currentPrice;
       
        coctail = input.shift();
        numCoctails = Number(input.shift());

        if(totalPrice>=profitTarget){
            console.log(`Target acquired.`)
            break;
        }
        

    }
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`)
}

club(
   ['500', 'Bellini', '6', 'Bamboo', '7', 'Party!']
 // [ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ]
)