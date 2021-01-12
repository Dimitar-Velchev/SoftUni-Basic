function oscarsCeremony(arg1){
    let rent = Number(arg1)
    let statuettes = Number(rent - rent * 0.3)
    let catering = Number(statuettes - statuettes * 0.15)
    let sound = Number(catering / 2)
    let total = Number(rent + statuettes + catering + sound)
    console.log(total.toFixed(2))
}
oscarsCeremony(3500)