function supprimerUnPostit(button) {
	let postit = button.parentElement;
	postit.remove();
}

function ajouterPostit() {
	let titreInput = document.getElementById("titreInput");
	let texteInput = document.getElementById("texteInput");
	let postitsContainer = document.getElementById("postitsContainer");

	let titre = titreInput.value.trim();
	let texte = texteInput.value.trim();

	if (titre && texte) {
		let postit = document.createElement("div");
		postit.className = "postit";

		postit.innerHTML = `
<h3>${titre}</h3>
<p>${texte}</p>
<button class="supprimerPostit" onclick="supprimerUnPostit(this)">X</button>
`;

		postitsContainer.appendChild(postit);

		titreInput.value = "";
		texteInput.value = "";
	} else {
		alert("Veuillez remplir les deux champs.");
	}
}

function effacerChamps() {
	document.getElementById("titreInput").value = "";
	document.getElementById("texteInput").value = "";
}