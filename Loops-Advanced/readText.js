function readText(input){
    let text = input.shift();
    count = 0;
    while(text !== "Stop"){
        text = input.shift();
        count++
    }
    console.log(count)
}

readText([
    
    "Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop"
      
])
