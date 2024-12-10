let princesses = ["Cendrillon"];
console.log(princesses);

princesses.push("Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Zelda", "Jasmine");
console.log(princesses);

princesses = princesses.filter(princess => princess !== "Peach" && princess !== "Zelda");
console.log(princesses);

princesses.sort();
console.log(princesses);
console.log(`Il y a ${princesses.length} princesses dans le tableau.`);