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

        inputArray.reverse();
       
        let arrayMirror = [];

        while(arrayLenght>=1){
            arrayLenght--;
            // console.log(arrayLenght);
            console.log(inputArray[arrayLenght]);
            
            
        }

	}
});

// const array1 = [1, 2, 3, 4];
// const array2 = [];

// for (let i = array1.length - 1; i >= 0; i--) {
//   array2.push(array1[i]);
// }

// console.log(array2); // [4, 3, 2, 1]



// for (let i = inputArray.length - 1; i >= 0; i--){
//     arrayMirror.push(arrayLenght[i]);
//     console.log(arrayMirror);
// }