function solve (arg,arg1){
    let numberBees = Number(arg);
    let numberFlowers = Number(arg1);
    let honeycomb = numberBees * numberFlowers * 0.21;
    let total = Math.floor(honeycomb / 100);
    let diff = honeycomb % 100;
    console.log(`${total} honeycombs filled.`)
    console.log(`${diff.toFixed(2)} grams of honey left.`)
}
solve(11,120)