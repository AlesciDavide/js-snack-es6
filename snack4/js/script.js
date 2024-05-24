const squadreCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Sampdoria", puntiFatti: 0, falliSubiti: 0 }
];


/* funzione per generare numero random */
function generateNumberRandom(){
    let num = Math.floor(Math.random() * 100 + 1) ;
    return num;
};

for (const key in squadreCalcio) {
    squadreCalcio[key].puntiFatti = generateNumberRandom();
    squadreCalcio[key].falliSubiti = generateNumberRandom();
}
console.log(squadreCalcio);