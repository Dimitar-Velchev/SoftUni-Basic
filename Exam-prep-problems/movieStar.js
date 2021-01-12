function movieStar(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    let length = command.length;
    let pay = 0;
    let totalPay = 0;


    while (command !== "ACTION") {


        if (length <= 15) {
            pay = Number(input.shift());
        } else {
            pay = budget * 0.20;
        }

        budget -= pay;
        totalPay +=pay;
        
        command = input.shift();
        length = command.length;
        if(budget<=0){
            break;
        }


    }

   
    if (budget >=0){
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    }else{
        budget = Math.abs(budget)
        console.log(`We need ${budget.toFixed(2)} leva for our actors. `)
    }
}

movieStar(
    [ '1000', 'John Cena', '800', 'Freddy Kim', '3000', 'ACTION' ]
)