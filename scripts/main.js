const searchButton = document.querySelector(`.search-icon`);
let searchDefault = (document.querySelector(`#search`).value = `Szukaj`);
let searchInput = document.querySelector(`#search`);

searchInput.addEventListener("focus", function () {
	if (searchDefault === "Szukaj") {
		searchInput.value = "";
	}
});

searchInput.addEventListener("blur", function () {
	searchInput.value = "Szukaj";
	// searchInput.value = 'Szukaj';
});

searchButton.addEventListener("click", function () {
	console.log(searchInput);
});

searchInput.addEventListener("keydown", function () {
	let key = event.key;

	if (key === "Enter") {
		console.log(searchInput.value);
	}
});

// let input = document.querySelector('#myInput');

// input.addEventListener('keydown', function(event) {
//   let key = event.key;
//   if (key === 'Enter') {
//     // tutaj wpisz kod do przetworzenia zawartości inputa
//   }
// });
