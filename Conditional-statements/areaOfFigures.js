function areaOfFigures(shape, side1, side2){
    let result = 0
    let sideA = Number(side1);
    let sideB = Number(side2);
    if(shape==="square"){
        result = sideA * sideA;
    } else if( shape==="rectangle"){
        result = sideA * sideB;
    } else if(shape==="circle"){
        let radius = sideA;
        result = Math.PI* radius * radius;
    } else if(shape==="triangle"){
        let h = sideA;
        result = (h * sideB) / 2
    }
    console.log(result.toFixed(3))
}

areaOfFigures("triangle", 4.5, 20)