function movieProfit(arg1, arg2, arg3, arg4, arg5){
    let name = arg1
    let numDays = arg2
    let numTicket = arg3
    let ticketPrice = arg4
    let cinemaTax = arg5
    let cinemaFee = numDays * numTicket * ticketPrice * arg5 / 100
    let profit = (numDays * numTicket * ticketPrice - cinemaFee).toFixed(2)
    let result =(`The profit from the movie ${name} is ${profit} lv.`)
    console.log(result)
}
movieProfit("The Programmer", 20, 500, 7.5, 7)
