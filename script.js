var countries = [
    {name: "Abchazija", size: 8660, population: 242000},
    {name: "Afganistanas", size: 652864, population: 38346720},
    {name: "Airija", size: 70000, population: 5120000},
    {name: "Arlandai", size: 1527, population: 27700},
    {name: "Albanija", size: 28700, population: 2845000},
]

for(var i = 0; i < countries.length; i++){
    calc()
    console.log(`Salis: ${countries[i].name} , joje gyvena ${popmln.toFixed(2)}mln. gyventoju.`)
    console.log(`Valsybes plotas: ${countries[i].size}km². plotas tenkantis vienam gyventojui: ${sizePop.toFixed(2)}m2`)
}

// Skaiciavimas
function calc(){
    sizePop = countries[i].size*1000000/countries[i].population
    popmln = countries[i].population/1000000
}