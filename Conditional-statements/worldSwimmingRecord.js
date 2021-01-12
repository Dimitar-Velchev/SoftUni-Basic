function swimmingRecord(arg1, arg2, arg3) {
    let worldRecord = Number(arg1)
    let distanceInMeters = Number(arg2)
    let timeFor1Meter = Number(arg3)
   
    let delay = Math.floor(distanceInMeters / 15) * 12.5
    let totalTime = (distanceInMeters * timeFor1Meter) + delay
    let diff= Math.abs(totalTime - worldRecord)

    if(totalTime<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else if(totalTime>=worldRecord){
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)

    }

}
swimmingRecord(10464, 1500, 20)

