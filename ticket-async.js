
// import du module FileSystem ("fs")
const fs = require('fs');

const commande = {
    nomProduit: "Kores, White Board Cleaner",
    prix: 15.75,
    client: "2iTech",
}

console.log("Rédaction du ticket");


// écrire dans un fichier (asynchrone)
fs.writeFile('./trucs.txt', JSON.stringify(commande), (err) => {
    if (err) console.error(err);
        console.log("Ticket écrit");
});

console.log("Autre action");

// Lire un fichier (asynchrone)
fs.readFile("./trucs.txt", { encoding: 'utf-8' }, (err, data) => {
    if (err) console.error(err);
     console.log({ data })
});

