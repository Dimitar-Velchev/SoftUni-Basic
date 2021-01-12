function godzilla(arg1, arg2, arg3){
    let budget = Number(arg1)
    let actors = Number(arg2)
    let pricePerActor = Number(arg3)
    let decor = budget * 0.1
    let priceAllActors = actors * pricePerActor
    

    if(actors>=150){
        priceAllActors -= priceAllActors * 0.1 
    }

    let allExpenses = decor + priceAllActors
    let diff = Math.abs(budget - allExpenses)

    if(allExpenses > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else if( allExpenses <= budget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }

} 

godzilla(9587.88, 222, 55.68)