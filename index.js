console.log('Hello World');
// import du module FileSystem ("fs")
const fs = require('fs');

const commande = {
    nomProduit: "Kores, White Board Cleaner",
    prix: 15.75,
    client: "2iTech",
}

console.log("Rédaction du ticket");

console.log("Autre action");
// écrire dans un fichier (synchrone)
fs.writeFileSync('./trucs.txt', JSON.stringify(commande));

console.log("Ticket écrit");

// Lire un fichier (synchrone), si on ne précise pas l'encodage, on récupère un Buffer (valuer binaire brute)
const fileContent = fs.readFileSync("./trucs.txt", { encoding: 'utf-8'});

console.log(fileContent);