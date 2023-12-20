const superHero= require('./super_hero')
const batman= new superHero('batman')
console.log(batman.getname())
batman.setname('superman')
console.log(batman.getname())
const newbatman =  new superHero('ironman')
console.log(newbatman.getname())

