
ar P = new Promise((resolve, reject) => {}); //chronologgie exetusion

console.log('Le processeur continue de travailler'); //1
P.catch(resultat => {
  console.log('Le résultat est ' + resultat);//3
});

P.then(resultat => {
  console.log('Le résultat est ' + resultat);//3
});
console.log('Le processeur continue de travailler');//2

===========================================================
var DemandeAuService = new Promise((resolve, reject) => {
  setTimeout(() => {
    var s = new Date().getSeconds();
    if (s % 2) {
      resolve(4);
    } else {
      reject('Pas ok');
    }
  }, 2000);
});

console.log('Le processeur continue de travailler');
DemandeAuService.catch(resultat => {
  console.log("Une erreur s'est produite");
});
DemandeAuService.then(resultat => {
  console.log('Le résultat est ' + resultat);
})
  .then(c => c * 2)
  .then('Le résultat est ' + resultat);
console.log('Le processeur continue de travailler');

========================================================


