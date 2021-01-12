function renovation(input) {
    let h = Number(input.shift());
    let w = Number(input.shift());
    let noPaint = Number(input.shift());

    let room = h * w * 4;
    let paint = room - (room * noPaint / 100);
    paint = Math.ceil(paint);
    let command = input.shift();
    let paintUsed = 0;

    while (command !== undefined) {
        if (command === "Tired!") {
            console.log(`${paint} quadratic m left.`)
            break;
        }
        paintUsed = Number(command);
        if (paint <= paintUsed) {
            break;
        }
        paint -= paintUsed
       

        command = input.shift();
    }

    if(paint<paintUsed){
        let diff = Math.abs(paint - paintUsed)
        console.log(`All walls are painted and you have ${diff} l paint left!`)
    } else if(paint === paintUsed){
        console.log(`All walls are painted! Great job, Pesho!`)
    }

    }



renovation(
    ['3', '5', '10', '2', '3', '4', 'Tired!']
  // [ '2', '3', '25', '6', '7', '8' ]

)