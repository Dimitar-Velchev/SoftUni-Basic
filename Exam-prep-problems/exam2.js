function beeRole (arg1,arg2,arg3){
    let intelligance = Number(arg1);
    let strenght = Number(arg2);
    let gender = arg3;

    if(intelligance>=80 && strenght >= 80 && gender === "female"){
        console.log(`Queen Bee`);
    }else if (intelligance >= 80){
        console.log(`Repairing Bee`);
    }else if (intelligance >= 60){
        console.log(`Cleaning Bee`);
    }else if (strenght >= 80 && gender === "male"){
        console.log(`Drone Bee`)
    }else if (strenght >= 60){
        console.log(`Guard Bee`);
    }else {
        console.log(`Worker Bee`)
    }
}
beeRole(90,65,"male")