function aniTrip(input) {
    let command = input.shift();
    let budget = Number(input.shift());
    let savings = 0;

    while (command !== "End" && command !== undefined) {
        let destination = command;
        let saving = Number(input.shift());
        savings = 0;
        while (savings <= budget) {
            savings += saving;
            if (savings >= budget) {
                console.log(`Going to ${destination}!`)
                break;
            }
            saving = Number(input.shift());

        }
        command = input.shift();
        budget = Number(input.shift());

    }
}

aniTrip([
    //  "Greece",
    //  "1000",
    //  "200",
    //  "200",
    //  "300",
    //  "100",
    //  "150",
    //  "240",
    //  "Spain",
    //  "1200",
    //  "300",
    //  "500",
    //  "193",
    //  "423",
    //  "End",

    "  France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"

])