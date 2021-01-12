function oldBooks(input) {
    let AnnieBook = input.shift();
    let capacity = Number(input.shift());
    let command = input.shift();
    let count = 0;
    while (command !== AnnieBook) {
        command = input.shift();
        count++

        if (count < capacity) {
            continue;
        } else {
            console.log(`The book you search is not here!`)
            console.log(`You checked ${capacity} books.`)
            break;
        } 
    }
 if(command === AnnieBook){
    console.log(`You checked ${count} books and found it.`)
 }
}

oldBooks([
    "The Spot",
    4,
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify"
    

])