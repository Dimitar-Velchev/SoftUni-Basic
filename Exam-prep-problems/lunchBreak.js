function lunchBreak(arg1, arg2, arg3) {
    let nameShow = arg1;
    let episodeLength = Number(arg2);
    let breakLenght = Number(arg3);
    let lunch = breakLength / 8;
    let rest = breakLength / 4;
    let timeLeft = breakLength - lunch - rest;
    let diff = Math.abs(episodeLength - timeLeft);
    if (timeLeft >= episodeLenght) {
        console.log(`You have enough time to watch ${nameShow} and left with ${Math.ceil(diff)} minutes free time.`);
    } else if (timeLeft < episodeLenght) {
        console.log(`You don't have enough time to watch ${nameShow}, you need ${Math.ceil(diff)} more minutes. `);
    }

}
lunchBreak("Teen wolf", "48", "60")