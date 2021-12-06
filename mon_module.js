//  Fonction perso
const sayHello = (person) => {
    if (!person) {
        person = "World";
    }
    console.log(`Hello ${person}`);
}
// export de la fonction
module.exports = sayHello;