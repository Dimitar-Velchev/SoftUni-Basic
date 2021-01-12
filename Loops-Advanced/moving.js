function moving(input){
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());
    let command = input.shift();
    
    let freeSpaceCubic = w*l*h
    while(command !== "Done"){
        let box = Number(command);
        freeSpaceCubic -=box;

        if(freeSpaceCubic<0){
            console.log(`No more free space! You need ${Math.abs(freeSpaceCubic)} Cubic meters more.`)
            break;
        }
      command=input.shift()

    }
   
    
    if(freeSpaceCubic>0){
        console.log(`${freeSpaceCubic} Cubic meters left.`)
}
}
moving([
 10,
10,
2,
20,
20,
20,
20,
122

])

