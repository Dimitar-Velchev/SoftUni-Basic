function mountainRun (input){
let record = Number(input[0]);
let distanceInMeter = Number (input[1]);
let timeFor1meter = Number (input[2]);
let distance = distanceInMeter * timeFor1meter;
let delay = Math.floor(distanceInMeter/50)*30;
let totalTime = distance + delay;
let diff = Math.abs (totalTime - record);
if(record<=totalTime){
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
}else if (record>totalTime){
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
}

}
mountainRun([5554.36, 1340, 3.23])