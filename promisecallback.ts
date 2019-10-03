

npm init
npm install express --save
npm install -g typescript

npm install @types/express
tsc --watch
node server

ctrt k  + ctrl c 




=============
cote serveur --->http
npm install cors
npm install @types/cors




addItem(libelle: string) {
    this.service.addItemToListe(this.liste.id, libelle).then(() => {
      this.liste.items.push(new ListeItem({ libelle: libelle }));
      this.messageService.add({
        severity: 'success',
        summary: "L'item est ajouté",
        detail: 'Bravo'
      });
    });
  }



============================
reffere le dto sur server
les classes:
DAO data access object
DTO data transfert object


POCO---------> QUI ME SERT POUR MON APPLICATION
POJO----------->


=====================================
------cordova----------------------
====================================

ib@WINIB-PKUC3DAB2 ~/Webmobile (master)
λ  ---> commande : npm install -g cordova
C:\Users\ib\AppData\Roaming\npm\cordova -> C:\Users\ib\AppData\Roaming\npm\node_modules\cordova\bin\cordova
+ cordova@9.0.0
added 455 packages from 360 contributors in 25.172s

---> commande : cordova --help

ib@WINIB-PKUC3DAB2 ~/Webmobile (master)
λ  ---> commande : cordova create testProject
Creating a new cordova project.


sur visual code:

ib@WINIB-PKUC3DAB2 MINGW64 ~/Webmobile/testProject (master)
$ cordova platform add browser
cordova run browser




















var P = new Promise((resolve, reject) => {});

console.log('Le processeur continue de travailler');
P.catch(resultat => {
  console.log('Le résultat est ' + resultat);
});

P.then(resultat => {
  console.log('Le résultat est ' + resultat);
});
console.log('Le processeur continue de travailler');

