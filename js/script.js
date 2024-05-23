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



