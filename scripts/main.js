const searchButton = document.querySelector(`.search-icon`);
let searchDefault = (document.querySelector(`#search`).value = `Szukaj`);
let searchInput = document.querySelector(`#search`);
let googleAdresString = "https://www.google.com/search?q=";

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
		let stringToSearchArray = [];
		// console.log(arrayLenght);

		// reverse the inputArray
		inputArray.reverse();

		while (arrayLenght >= 1) {
			arrayLenght--;
			stringToSearchArray.push(inputArray[arrayLenght] + `+`);
		}

		let stringToSearch;

		// joining array to one string
		stringToSearch = stringToSearchArray.join("");

		// removing last character (+)
		stringToSearch = stringToSearch.slice(0, -1);

		// combining google search constant adres with serching sentence
		googleAdresString = googleAdresString + stringToSearch;

		// opening finished link in new tab
		window.open(googleAdresString);

        // reseting serch for another
        googleAdresString = 'https://www.google.com/search?q=';
	}
});
