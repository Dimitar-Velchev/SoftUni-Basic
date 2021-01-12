function rectArea(arg1, arg2, arg3, arg4){
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);
    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = length * width;
    let parameter = 2 * (length + width);
    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));

}

rectArea(60, 20, 10, 50)