function cinema(input) {
    let seatsAvailable = Number(input.shift());
    let command = input.shift();
    let allSeatsTaken = 0;
    let income = 0;
    let seatsLeft = 0;

    while (command !== "Movie time!") {
        let seatsTaken = Number(command);
        allSeatsTaken += seatsTaken;


        if (seatsTaken % 3 === 0) {
            income += (seatsTaken * 5) - 5
        } else {
            income += seatsTaken * 5
        }
        if (allSeatsTaken > seatsAvailable) {
            console.log(`The cinema is full.`)
            break;
        }

        
        seatsLeft = seatsAvailable - allSeatsTaken
        command = input.shift();
    }


    if (command === "Movie time!") {
        console.log(`There are ${seatsLeft} seats left in the cinema.`)
    }
    console.log(`Cinema income - ${income} lv.`)

}

cinema(
    //['60', '10', '6', '3', '20', '15', 'Movie time!']
    //[ '50', '15', '10', '10', '15', '5' ]

    //[
    //    '100', '10',
    //    '10', '10',
    //    '10', '10',
    //    '10', '10',
    //    '10', '10',
    //    '10', 'Movie time!'
    //]

    [50,
    15,
    15,
    10,
    9,
    9]
)