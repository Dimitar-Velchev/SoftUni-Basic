function basketballEquipment (arg1){
    let fee = Number(arg1)
    let shoes = Number(fee - fee * 0.4)
    let uniform = Number(shoes - shoes * 0.2)
    let ball = Number(uniform / 4)
    let accessories = Number( ball / 5)
    let total = Number(fee + shoes + uniform + ball + accessories)
    console.log(total.toFixed(2))
}
basketballEquipment(320)