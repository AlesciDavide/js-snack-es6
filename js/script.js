/* esercizio 1 */

const nomiInvitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const segnaposto = [];

nomiInvitati.forEach((elemento, indice) => {
    let oggettoInvitati = {};
    oggettoInvitati.tableName = "Tavolo Vip";
    oggettoInvitati.guestName = elemento;
    oggettoInvitati.place = indice + 1;
    
    segnaposto.push(oggettoInvitati);

})
console.log(segnaposto);



/* esercizio 2 */

const elencoStudenti = [
    {   
        id: 213,
        name: 'Giuseppina della rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades : 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna ',
        grades : 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini ',
        grades : 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades : 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades : 50,
    },
    {
        id: 100,
        name: 'Francesca da Polenta',
        grades : 84,
    },
]


let nomeStudenti = [];
let studentiSettanta = [];
let studentiIdPlus = [];

for (const key in elencoStudenti) {
    let upperCase = elencoStudenti[key].name.toUpperCase();
    nomeStudenti.push(upperCase);
    
    if(elencoStudenti[key].grades > 70){
        studentiSettanta.push(elencoStudenti[key]);
    };
    if(elencoStudenti[key].id > 120 && elencoStudenti[key].grades > 70){
        studentiIdPlus.push(elencoStudenti[key]);
    }
}

console.log(nomeStudenti);
console.log(studentiSettanta);
console.log(studentiIdPlus);


/* nomeStudenti.push(studente.name.toUpperCase()); */