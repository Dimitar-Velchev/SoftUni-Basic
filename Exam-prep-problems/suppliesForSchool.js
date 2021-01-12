function supplyForSchool(arg1, arg2, arg3, arg4){
    let pen = Number(arg1)
    let markers = Number(arg2)
    let spray = Number(arg3)
    let discount = Number(arg4) 
    discount = Number(discount * 0.01)
    let penTotal = Number(arg1 * 5.8)
    let markerTotal = Number(arg2 * 7.2)
    let sprayTotal = Number(arg3 * 1.2)
    let totalSum = Number(penTotal + markerTotal + sprayTotal)
    let result = Number(totalSum - totalSum * discount)
    console.log(result.toFixed(3)) 
    
}

supplyForSchool("4", "2", "5", "13")