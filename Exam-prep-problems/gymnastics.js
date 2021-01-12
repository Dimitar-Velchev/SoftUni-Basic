function gymnastics(country, discipline) {
    let score;
    switch (country) {
        case "Russia":
            if(discipline === "ribbon"){
                score = 9.100 + 9.400
            }else if(discipline === "hoop"){
                score = 9.300 + 9.800
            } else if(discipline === "rope"){
                score = 9.600 + 9.000
            }
            break;
        case "Bulgaria":
            if(discipline === "ribbon"){
                score = 9.600 + 9.400
            }else if(discipline === "hoop"){
                score = 9.550 + 9.750
            } else if(discipline === "rope"){
                score = 9.500 + 9.400
            }
            break;
        case "Italy":
            if(discipline === "ribbon"){
                score = 9.200 + 9.500
            }else if(discipline === "hoop"){
                score = 9.450 + 9.350
            } else if(discipline === "rope"){
                score = 9.700 + 9.150
            }
            break;
    }
    let diff = 20 - score
    let percent = ((diff/20) * 100).toFixed(2)

    console.log(`The team of ${country} get ${score.toFixed(3)} on ${discipline}.`)
    console.log(`${percent}%`)

}

gymnastics("Russia", "rope")