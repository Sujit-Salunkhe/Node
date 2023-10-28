function greet(name) {
    console.log(`Hello ${name}`)
}

function greetVishewas(greetfn){
    let name = 'vishewas'
    greetfn(name)
}

greetVishewas(greet); 