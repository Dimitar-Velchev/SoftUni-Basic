function trekkingMania(input) {
    let numGroups = Number(input.shift());
    let Musala = 0;
    let Monblan = 0;
    let Kili = 0;
    let K2 = 0;
    let Everest = 0;
    let totalPeople = 0

    for (let i = 1; i <= numGroups; i++) {
        let numPeople = Number(input.shift());
        if (numPeople <= 5) {
            Musala += numPeople;
        } else if (numPeople <= 12) {
            Monblan += numPeople;
        } else if (numPeople <= 25) {
            Kili += numPeople;
        } else if (numPeople <= 40) {
            K2 += numPeople;
        } else {
            Everest += numPeople
        }
        totalPeople += numPeople
    }
let percentMusala = (Musala / totalPeople) * 100
let percentMonblan = (Monblan / totalPeople) * 100
let percentKili = (Kili / totalPeople) * 100
let percentK2 = (K2 / totalPeople) * 100
let percentEverest = (Everest / totalPeople) * 100

console.log(`${percentMusala.toFixed(2)}%`)
console.log(`${percentMonblan.toFixed(2)}%`)
console.log(`${percentKili.toFixed(2)}%`)
console.log(`${percentK2.toFixed(2)}%`)
console.log(`${percentEverest.toFixed(2)}%`)

}

trekkingMania([
    5,
    25,
    41,
    31,
    250,
    6
    
    ])