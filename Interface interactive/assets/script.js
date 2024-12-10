function afficherTexte() {
	const inputTexte = document.getElementById('texte').value;
	const header = document.getElementById('header');
	if (inputTexte == 'totoro' || inputTexte == 'Totoro') {
		header.style.color = "transparent";
		header.style.backgroundImage = "url('https://i.pinimg.com/originals/12/0d/c0/120dc0a37557e1c540e8b41b39222cb5.gif')";
	} else {
		header.textContent = inputTexte ? inputTexte : "Modification texte 1";
	}
}

function changerCouleur(couleur) {
	const header = document.getElementById('header');
	const inputTexte = document.getElementById('texte').value;
	header.style.color = couleur;
	if (inputTexte == 'totoro' || inputTexte == 'Totoro') {
		header.style.color = "transparent";
	}
}
//Faire en bootstrap et pas onclick mais addEventListener