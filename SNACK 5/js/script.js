const sectionEl = document.querySelector('section#container');

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
console.log(articoliCartellini[0].name);

let divCardEl = document.createElement('div');
divCardEl.classList.add('card');
sectionEl.appendChild(divCardEl);

for(let i= 0; i < articoliCartellini.length; i++){
        let pEl = document.createElement('p');
        pEl.append(`${articoliCartellini[i].name} ${articoliCartellini[i].type} ${articoliCartellini[i].color} ${articoliCartellini[i].position}`);
        /*  pEl.append(`${articoliCartellini[i].type}`);
        pEl.append(`${articoliCartellini[i].color}`);
        pEl.append(`${articoliCartellini[i].position}`); */
        divCardEl.appendChild(pEl);
};