function examPoints(arg1, arg2, arg3) {
    let problem = Number(arg1)
    let points = Number(arg2)
    let course = arg3
    let totalPoints = 0

    if (course === "Basics") {
        switch (problem) {
            case 1: totalPoints = (points * 0.08) * 0.8; break
            case 2: totalPoints = (points * 0.09); break
            case 3: totalPoints = points * 0.09; break
            case 4: totalPoints = points * 0.10; break
        } 
    }else if(course === "Fundamentals"){
        switch (problem) {
            case 1: totalPoints = points * 0.11; break
            case 2: totalPoints = points * 0.11; break
            case 3: totalPoints = points * 0.12; break
            case 4: totalPoints = points * 0.13; break
        } 
    }else if(course === "Advanced"){
        switch (problem) {
            case 1: totalPoints = points * 0.14 * 1.2; break
            case 2: totalPoints = points * 0.14 * 1.2; break
            case 3: totalPoints = points * 0.15 * 1.2; break
            case 4: totalPoints = points * 0.16 * 1.2; break
        } 
    }

    console.log(`Total points: ${totalPoints.toFixed(2)}`)
}

examPoints(3, 80, "Fundamentals")