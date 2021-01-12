function cake(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let slicesAvailable = w * l;
    
    let allSlices = 0;
    let stop = false
    let currentCommand = input.shift();
    while (currentCommand !== "STOP") {
        let currentSlice = Number(currentCommand);
        allSlices += currentSlice;
        currentCommand = input.shift();



        if (allSlices > slicesAvailable) {
            stop = true
           break;
        }
    }

    let diff = Math.abs(allSlices - slicesAvailable);
    if (!stop) {
        console.log(`${diff} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${diff} pieces more.`)
    }
}

cake([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"



])