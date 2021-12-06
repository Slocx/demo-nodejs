// utilisation d'une librairie externe (npm i colors)
require('colors');
//  idem mais on récupère l'objet (npm i uuid)
const uuid = require('uuid');

const { v4 } = require('uuid');

// récup de la fonction d'un autre module
const sayHello = require('./mon_module');
sayHello("Michel en dehors du module");

// affichage des argmuents passé à node
// console.log(process.argv);


// Dire bonjour à l'argument de Node
console.log("Hello World !".yellow.bold, `${process.argv[2]}`.red.italic.bold);

// 2 appels différents
console.log("UUID:", v4());
console.log("UUID:", uuid.v4());

