function walking(input) {
    let command = input.shift();
    let totalsteps = 0
    let steps = 0;

    while (totalsteps < 10000) {
        if (command === "Going home") {
            steps = Number(input.shift());
            totalsteps += steps;
            break;
        }
        steps = Number(command);
        totalsteps += steps;
        command = input.shift()
    }

    let diff = 10000 - totalsteps;

    if (totalsteps >= 10000) {
        console.log(`Goal reached! Good job!`)
    } else {
        console.log(`${diff} more steps to reach goal.`)
    }

}

walking(
    [ '1500', '300', '2500', '3000', 'Going home', '200' ]


)