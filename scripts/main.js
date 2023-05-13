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
		// console.log(searchInput.value);
		let inputString = searchInput.value;
		console.log(inputString);
		inputArray = inputString.split(" ");
		console.log(inputArray);
		let arrayLenght = inputArray.length;
		console.log(arrayLenght);

        // do {
        //     // kod do wykonania
        //   } while (warunek);

	}
});

// let inputString = "To jest przykładowy tekst";
// let inputArray = inputString.split(" ");
// console.log(inputArray); // ["To", "jest", "przykładowy", "tekst"]
