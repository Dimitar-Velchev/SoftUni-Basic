function danceHall(arg1, arg2, arg3){
    let length = arg1;
    let width = arg2;
    let sideA = arg3;
    let area = length * width;
    let bench = area / 10;
    let wordrobe = sideA * sideA;
    let freeArea = area - (bench + wordrobe);
    let numDancers =Math.floor(freeArea / 0.704);
    console.log(numDancers);
}

danceHall(50, 25, 2)