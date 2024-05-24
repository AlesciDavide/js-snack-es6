const articoli = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red"
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink"
    }
];

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/* funzione per generare numero random per utilizzarlo tra gli indici dell'array alfabeto*/
function generateNumberRandom(num){
    let numero = Math.floor(Math.random() * num + 1) ;
    return numero;
};

const articoliCartellini = [];
for(let i = 0; i < articoli.length; i++){
    let oggettoNuovo = {};
    oggettoNuovo.name = articoli[i].name;
    oggettoNuovo.type = articoli[i].type;
    oggettoNuovo.color = articoli[i].color;
    oggettoNuovo.position = alfabeto[generateNumberRandom(alfabeto.length - 1)];
    
    articoliCartellini.push(oggettoNuovo);
}
console.log(articoliCartellini);