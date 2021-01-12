function exam(arg1, arg2, arg3) {
    let level = Number(arg1);
    let spin = Number(arg2);
    let numPage = Number(arg3);

    if (level >= 80 && spin >= 80 && numPage >= 8) {
        console.log("Legacy");
    } else if (level >= 80 && spin <= 10) {
        console.log("Master");
    }else if (level <= 30 && numPage <= 1) {
        console.log("Easy")
    } else if (level <= 10) {
        console.log("Elementary")
    }else if (spin >= 50 && numPage >= 2) {
        console.log("Hard"); 
    }else {
        console.log("Regular")
    }
}
exam(80,
    40,
    3)