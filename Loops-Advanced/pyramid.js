function pyramid(input){
    let num = Number(input.shift());
    let current = 1;
    let isBigger = false;
    let currentLine = "";
    for(let rows = 1; rows<=num; rows++){
        for(let cols = 1; cols<=rows; cols++){
            if(current> num){
                isBigger = true;
                break;
            }
            currentLine +=current + " ";
            current++;
        }
        console.log(currentLine);
        currentLine = "";
        if(isBigger){
            break;
        }
    }
}

pyramid([7])