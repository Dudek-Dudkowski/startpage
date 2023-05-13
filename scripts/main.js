const searchButton = document.querySelector(`.search-icon`);
let searchDefault = document.querySelector(`#search`).value = `Szukaj`;
let searchInput = document.querySelector(`#search`);

searchInput.addEventListener('focus', function(){
    if(searchDefault==='Szukaj'){
        searchInput.value = '';
    }
    // else{
    //     searchInput.value = 'Szukaj';
    // }
});

searchInput.addEventListener('blur', function(){
    searchInput.value = 'Szukaj';
        // searchInput.value = 'Szukaj';
  
});


searchButton.addEventListener("click", function(){
    console.log(searchInput); 
});