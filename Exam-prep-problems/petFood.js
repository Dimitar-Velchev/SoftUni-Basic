function petFood(input) {
    let numDays = Number(input.shift())
    let totalFood = Number(input.shift())
    let sumDog = 0
    let sumCat = 0
    let sumTogether = 0
    let biscuits = 0
    let totalBiscuits = 0

    for (let i = 1; i <= numDays; i++) {
        let foodDog = Number(input.shift())
        sumDog += foodDog
        let catFood = Number(input.shift())
        sumCat += catFood
        sumTogether = sumDog + sumCat

        if (i % 3 === 0) {
            biscuits = Math.ceil((foodDog + catFood) * 0.10)
            totalBiscuits += biscuits
        }


    }
    let percentTotalFood = (sumTogether / totalFood) * 100
    let percentDog = (sumDog / sumTogether) * 100
    let percentCat = (sumCat / sumTogether) * 100

    console.log(`Total eaten biscuits: ${totalBiscuits}gr.`)
    console.log(`${percentTotalFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${percentDog.toFixed(2)}% eaten from the dog.`)
    console.log(`${percentCat.toFixed(2)}% eaten from the cat.`)

}

petFood([6,
    500,
    100,
    30,
    110,
    25,
    120,
    35,
    
    100,
    30,
    110,
    25,
    120,
    35,
    
    
])