function shopping(arg1, arg2, arg3, arg4) {
    let budget = Number(arg1)
    let videocards = Number(arg2)
    let processors = Number(arg3)
    let ram = Number(arg4)
    let videocardCost = videocards * 250
    let processorCost = processors * (videocardCost * 0.35)
    let ramCost = ram * (videocardCost * 0.10)
    let allCost = videocardCost + processorCost + ramCost

    if (videocards > processors) {
        allCost -= allCost * 0.15
    }
    let diff = Math.abs(budget - allCost)
    if(budget>=allCost){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else if(budget<allCost){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}

shopping(920.45, 3, 1, 1)