
    function beehivePopulation(arg1,arg2) {
        let startPopulation = Number(arg1);
        let years = Number(arg2);
        let newBees = 0;
        let deadBees = 0;
        let leftBees = 0;
        let newPopulation = 0;
       
        for (i = 1; i <= years; i++) {
            if (i % 5 === 0) {
                newBees = Math.floor(newPopulation / 10) * 2
                newPopulation += newBees
               leftBees = Math.floor(newPopulation / 50) * 5
                newPopulation -= leftBees
                deadBees = Math.floor(newPopulation / 20) * 2
                newPopulation -= deadBees
            } else if (i === 1) {
                newBees = Math.floor(startPopulation / 10) * 2
                newPopulation += startPopulation + newBees
                deadBees = Math.floor(newPopulation / 20) * 2
                newPopulation -= deadBees
            } else {
                newBees = Math.floor(newPopulation / 10) * 2
                newPopulation += newBees
                deadBees = Math.floor(newPopulation / 20) * 2
                newPopulation -= deadBees
            }
        }
        console.log(`Beehive population: ${newPopulation}`)
    }
    

    

beehivePopulation(100, 6)