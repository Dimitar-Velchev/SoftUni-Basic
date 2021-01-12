function skeleton(arg1, arg2, arg3, arg4){
    let controlMinutes = Number(arg1)
    let controlSeconds = Number(arg2)
    let lenght = Number(arg3)
    let secondsPer100m = Number(arg4)
    let controlTotal = controlMinutes * 60 + controlSeconds
    let delay = (lenght / 120) * 2.5 
    let timeMarin = (lenght /  100) * secondsPer100m - delay
    let diff = Math.abs(timeMarin - controlTotal)
    if(timeMarin<=controlTotal){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${timeMarin.toFixed(3)}.`)
    } else if(timeMarin>controlTotal){
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
    }
    
}

skeleton(2, 12, 1200,10)