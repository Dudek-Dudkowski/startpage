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
        let stringToSearchArray = [];
		// console.log(arrayLenght);

        inputArray.reverse();
       

        while(arrayLenght>=1){
            arrayLenght--;
            // console.log(arrayLenght);
            console.log(inputArray[arrayLenght]);     
            // stringToSearch = push(inputArray[arrayLenght]);
            stringToSearchArray.push(inputArray[arrayLenght]+`+`);

//             let str = "przykładowy string";
// str = str.slice(0, -1); // usunięcie ostatniego znaku
// console.log(str); // "przykładowy strin"
        }
        let stringToSearch

        // joining array to one string
        stringToSearch = stringToSearchArray.join('');
    
        // removing last character (+)
        stringToSearch = stringToSearch.slice(0, -1);

        console.log(stringToSearch);  

	}
});

