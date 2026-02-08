// Selecting elements
var popupoverlay = document.querySelector('.popup-overlay');
var popupbox = document.querySelector('.popup-box');
var addpopupbutton = document.getElementById('add-popup-button');
var cancelpopup = document.getElementById('cancel-popup');
var addmovie = document.getElementById('add-movie');
var container = document.querySelector('.container');
var movienameinput = document.getElementById('movie-name-input');
var moviedirectorinput = document.getElementById('movie-director-input');
var moviedescriptioninput = document.getElementById('movie-description-input');

// Show popup
addpopupbutton.addEventListener('click', function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

// Hide popup
cancelpopup.addEventListener('click', function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

addmovie.addEventListener('click', function(event) {
    event.preventDefault();
    
    var div = document.createElement('div');
    div.setAttribute('class', 'movie-container');
    div.innerHTML = `
        <h2>${movienameinput.value}</h2>
        <h5>${moviedirectorinput.value}</h5>
        <p>${moviedescriptioninput.value}</p>
        <button onclick="deletemovie(event)">Delete</button>`;
    
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    
    // Clear inputs
    movienameinput.value = "";
    moviedirectorinput.value = "";
    moviedescriptioninput.value = "";
});

function deletemovie(event) {
    event.target.parentElement.remove();
}