function movieDay(arg1, arg2, arg3) {
    let timeGiven = Number(arg1)
    let numScenes = Number(arg2)
    let sceneLenght = Number(arg3)
    let prep = timeGiven * 0.15
    let allTimeNeeded = numScenes * sceneLenght + prep
    let diff = Math.abs(timeGiven - allTimeNeeded)
    if(timeGiven>=allTimeNeeded){
        console.log(`You managed to finish the movie on time! You have ${diff.toFixed(0)} minutes left!`)
    }else if(timeGiven<allTimeNeeded){
        console.log(`Time is up! To complete the movie you need ${diff.toFixed(0)} minutes.`)
    }
}

movieDay(60, 15, 3)