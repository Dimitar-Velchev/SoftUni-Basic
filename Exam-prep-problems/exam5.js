function beehiveDefense(arg1, arg2, arg3) {
    let numBee = arg1;
    let healthBear = arg2;
    let attackBear = arg3;

    while (numBee >= 100 && healthBear >= 0) {
        numBee = Math.max((numBee - attackBear), 0);
        healthBear = healthBear - numBee * 5;

        if(numBee<0){
            break;
        }
    }


    if (numBee < 100) {
        console.log(`The bear stole the honey! Bees left ${numBee}.`)
    } else if (healthBear <= 0) {
        console.log(`Beehive won! Bees left ${numBee}.`)
    }


}



beehiveDefense(200, 1000, 10)