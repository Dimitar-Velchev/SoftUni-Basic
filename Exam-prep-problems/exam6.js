function honeyReserves(input) {
    let honeyNeeded = Number(input.shift());
    let totalHoney = 0;
    let command = input.shift()
    let allHoneyCollected = 0;

    while (command !== "Winter has come") {
        let name = command;
        totalHoney = 0;
       
        for (let i = 1; i <= 6; i++) {
            let collectHoney = Number(input.shift());
            totalHoney += collectHoney;

        }

        if (totalHoney < 0) {
            console.log(`${name} was banished for gluttony`)

        }
        allHoneyCollected += totalHoney;
        if(allHoneyCollected >= honeyNeeded){
            console.log(`Well done! Honey surplus ${(allHoneyCollected - honeyNeeded).toFixed(2)}.`)
            break;  
        }
        command = input.shift();
    }
    let diff = Math.abs(allHoneyCollected - honeyNeeded);
    
    if (allHoneyCollected < honeyNeeded) {
        console.log(`Hard Winter! Honey needed ${diff.toFixed(2)}.`)
    }


}
honeyReserves(

   [ '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come']

//
  // '300',
  // 'Beeatrice',
  // '50',
  // '-10',
  // '40',
  // '30',
  // '100',
  // '100',
  // 'Winter has come']
  // [
//      '1000',
//      'Maya',
//      '50',
//      '10.5',
//      '19.5',
//      '30',
//      '100',
//      '100',
//      'Winter has come'
//  
//
//]

)