function sumSeconds(timeFirstAsString, timeSecondAsString, timeThirdAsString) {
    let timeFirst = Number(timeFirstAsString);
    let timeSecond = Number(timeSecondAsString);
    let timeThird = Number(timeThirdAsString);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(22, 7, 34)