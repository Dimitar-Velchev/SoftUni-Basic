function movieDestination(arg1, arg2, arg3, arg4) {
    let budget = Number(arg1);
    let destination = arg2;
    let season = arg3;
    let numDays = Number(arg4);
    let price = 0
   
    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                price = 45000 * numDays;
            } else if (season === "Summer") {
                price = 40000 * numDays;
            } break;
        case "Sofia":
            if (season === "Winter") {
                price = 17000 * numDays;
            } else if (season === "Summer") {
                price = 12500 * numDays;
            } break;
        case "London":
            if(season === "Winter"){
                price = 24000 * numDays;
            }else if(season === "Summer"){
                price = 20250 * numDays;
            } break;
  }

  if(destination === "Dubai"){
      price *=0.7
  }
  if(destination === "Sofia"){
      price *= 1.25
  }

  let diff = Math.abs(budget - price).toFixed(2);
  if(budget>=price){
      console.log(`The budget for the movie is enough! We have ${diff} leva left!`)
  }else{
      console.log(`The director needs ${diff} leva more!`)
  }


}

movieDestination(1000000, "Dubai", "Summer", 5)