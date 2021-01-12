function projects(arg1, arg2, arg3){
    let name = arg1
    let numProjects = Number(arg2)
    let numHours = Number(arg2 * 3)
    let result = (`The architect ${name} will need ${numHours} hours to complete ${numProjects} project/s.`)
    console.log(result)

}

projects("Katy", "3")