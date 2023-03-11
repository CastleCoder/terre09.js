// Créez un programme qui affiche le résultat d’une puissance.


// L’exposant ne pourra pas être négatif.


// Exemples d’utilisation :
// $> node exo.js 2 3
// 

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


const args = process.argv.slice(2);

function pow(a, b){
  if(isNaN(a) || isNaN(b)){
  console.log("Erreur !")
  } else {
    if(a<0 || b<0 ){
      console.log("Il y a une erreur")
      } else {
      let result = Math.pow(a, b);
      console.log(result)
    }
  }
  
}

if (args.length !== 2){
  console.log("Attention il ne doit y avoir que 2 arguments");
}

pow(args[0], args[1]);




