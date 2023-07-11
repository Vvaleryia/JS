const globalLE = {
    environmentsRecord: {},
    outer: LE || null
}


//----------globalLE{}
let car = 'bmw' //globalLE{car: 'bmw'}
const startEngine = () => {
    //[[ Environment ]] => globalLE
    //startEngine{}
    console.log(`Start ${car}`)
}//globalLE{car : 'bmw', startEngine: function}

car = 'audi';//globalLE{car : 'audi', startEngine: function}

startEngine(); // Start audi