/*
'use strict'; 
(function() {
    const expr = 'Papayas';
    switch (expr) {
      case 'Oranges':
        display('Oranges are $0.59 a pound.');
        break;
      case 'Mangoes':
      case 'Papayas':
        display('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        display(`Sorry, we are out of ${expr}.`);
    }
  

})();
*/



function Document(numEnreg,titre){
this.numEnreg =numEnreg;
this.titre =titre;
}

function Livre (numEnreg,titre,Auteur,nbrPages){
  Document.call(this,numEnreg,titre)
  this.Auteur = Auteur;
  this.nbrPages = nbrPages;
  
  this.nbrPages= function nbPages(){
    switch (True) {
      case N <100:
        display('Nombre de page entre 0 et 100');
        break;
      case N > 101 && N <200:
        display('Nombre de page entre 101 et 200');
        break;
      case N > 201 && N <300:
        display('Nombre de page entre 201 et 300');
        break;
      default:
        display('Nombre de page est superieur à 300');
        
    }
  
  }
}

function Revue (numEnreg,titre,mois,annee){
  Document.call(this,numEnreg,titre)
  this.mois = mois; 
  this.annee = annee;
}

function Dictionnaire (numEnreg,titre,langue){
  Document.call(this,numEnreg,titre);
  this.langue = langue; 
}

Document.create=Object.create(Livre.prototype);
Document.create=Object.create(Revue.prototype);
Document.create=Object.create(Dictionnaire.prototype);

let Crep = new Livre ('59k','Crepuscule','Juan',500);



