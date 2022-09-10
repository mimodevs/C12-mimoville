const request = new XMLHttpRequest ();
request.open ('GET', 'places.json');
request.responseType = 'json';
request.onload = function () {
  let getListings = request.response;
  initialize (getListings);
};
request.send ();
function initialize (getListings) {
  localStorage.setItem ('listings', JSON.stringify (getListings));
}
let places = JSON.parse (localStorage.getItem ('listings'));

const filters = document.querySelector ('#filters');
const cards = document.querySelector ('#cards');
const details = document.querySelector ('#details');
const checkboxes = document.querySelectorAll ("input[type='checkbox']");
var checkboxValues = [];

updateCards ();

checkboxes.forEach (box => {
  box.checked = false;
  box.addEventListener ('change', () => filterCards ());
});
function grabCheckboxValues () {
  var checkboxValues = [];
  checkboxes.forEach (checkbox => {
    if (checkbox.checked) checkboxValues.push (checkbox.value);
  });
  return checkboxValues;
}

function filterCards () {
  cards.innerHTML = '';
  checkboxValues = grabCheckboxValues ();
  places.forEach (item => {
    let classes = item.classes;
    let result = (arr, target) => target.every (v => arr.includes (v));
    let isMatch = result (classes, checkboxValues);
    if (isMatch) {
      createCards (item);
    }
  });
}

function createCards (place) {
  var card = `
  <div class="card">
    <img src="images/${place.image}" alt="${place.name}">
    <h3 class="title">${place.name}</h3>
    <p>${place.price}</p>
    <p>${place.rate}</p>
    <button onclick="showDetails(${place.id})">Details</button><br/>
  </div>`;
  cards.innerHTML += card;
}

function updateCards () {
  places.forEach (createCards);
}

function showDetails (id) {
  details.style.display = 'block';
  home.style.display = 'none';
  filters.style.display = 'none';


  let place = places.find (place => place.id == id);
  var detail = `
  <div class="detail">
    <button onclick="hideDetails()">Back</button>
    <h2 class="title">${place.name}</h2>
    <div><img src="images/${place.image}" alt="${place.name}"></div>
    <p>${place.description}</p>
    <p>${place.address}</p>
    <p>${place.phone}</p>
    <p>${place.price}</p>
    <p>${place.rate}</p>
    <button onclick="favorite(${place.id})">Favorite</button>
    
  </div>`;
  details.innerHTML = detail;
}
function hideDetails () {
  details.style.display = 'none';
  home.style.display = 'block';
  filters.style.display = 'flex';

}
function favorite(id) {
  let place = places.find(place => place.id == id);
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (place.favorite == false) {
    place.favorite = true;
    favorites.push(place);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } else { 
    // place.favorite = false;
    // favorites = favorites.filter(favorite => favorite.id != id);
  }
  console.log(place.favorite)
}


function showFavorites() {
  filters.style.display = 'none';

  cards.innerHTML = '';
  let favorites = JSON.parse (localStorage.getItem ('favorites')) || [];
  favorites.forEach (createCards);
}

function showAll() {
  filters.style.display = 'flex';

  cards.innerHTML = '';
  updateCards ();
}