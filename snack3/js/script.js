const biciclette = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Pinarello Dogma F12", peso: 6.8 },
    { nome: "Specialized S-Works Tarmac", peso: 6.7 },
    { nome: "Cannondale SuperSix EVO", peso: 6.9 },
    { nome: "Trek Emonda SLR", peso: 5.5 },
    { nome: "Trek Emonda SLR rossa", peso: 5.5 },
    { nome: "Cervélo R5", peso: 6.8 },
    { nome: "Giant TCR Advanced SL", peso: 6.8 },
    { nome: "Scott Addict RC", peso: 6.7 },
    { nome: "Merida Scultura", peso: 6.9 },
    { nome: "Colnago V3Rs", peso: 7.0 }
];

let peso = 10;

for (const key in biciclette) {
    if(biciclette[key].peso < peso){
        peso = biciclette[key].peso;
    }
}
for (const key in biciclette) {
    if (biciclette[key].peso == peso) {
        const {nome, peso} = biciclette[key];
        console.log(`La bici con il peso minore é: ${nome} e pesa: ${peso}kg.`);
        
    }
}