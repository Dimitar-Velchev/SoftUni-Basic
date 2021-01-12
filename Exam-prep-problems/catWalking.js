function catWalk(arg1, arg2, arg3) {
    let minutesWalk = Number(arg1)
    let numWalks = Number(arg2)
    let calories = Number(arg3)
    let calBurnt = minutesWalk * 5
    let calDiff = calories * 0.5
    let allBurntCal = calBurnt * numWalks

    if (allBurntCal >= calDiff) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allBurntCal}.`)
    } else if (allBurntCal < calDiff) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allBurntCal}.`)
    }
    
}

catWalk(15, 2, 500)