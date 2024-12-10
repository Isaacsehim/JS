function pgcd() {

	let continuer = "o";

	while (continuer === "o") {

		let dividende = parseInt(prompt("Donner la valeur du dividende :"), 10);

		let diviseur = parseInt(prompt("Donner la valeur du diviseur :"), 10);

		if (diviseur === 0) {
			console.log("Le diviseur ne peut pas être 0");

		} else {
			let reste = 1;

			while (reste !== 0) {
				reste = dividende % diviseur;

				if (reste !== 0) {
					dividende = diviseur;
					diviseur = reste;
				}
			}
			console.log("Le PGCD est : " + diviseur);
		}
		continuer = prompt("Voulez-vous continuer ? (o pour Oui)").toLowerCase();
	}
}
pgcd();
