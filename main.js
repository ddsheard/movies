// ****
//Wednesday HOMEWORK
// Expand your site to show more things.
// - when a user searches for a movie, show a list of recommended movies based on it.
//   - display the recommended movies only if they are more popular than the first movie
//
// */

// --------------------------------------------

/* WHAT DO YOU WANT TO DISPLAY
  LEVEL 1
  Movie Name = original_title
  Release Date = release_date
  Description = overview
  Poster = poster_path = https://image.tmdb.org/t/p/w500/ 38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg

*/


function aboutMovie(json) {
    console.log(json);

    let title = document.querySelector('.originalTitle');
    title.textContent = json.title;

    let release = document.querySelector('.releaseDate');
    release.textContent = json.release_date;

    let description = document.querySelector('.movieDescription');
    description.textContent = json.overview;

    let avatar = document.querySelector('img');
    avatar.src = 'https://image.tmdb.org/t/p/w500' + json.poster_path;
}

// fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key +"&query=Jack+Reacher")
// .then(response => response.json())
// .then(aboutMovie);

let searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', recognizeInput);

function recognizeInput(event) {
    console.log("button clicked");

    // let searchButton = document.querySelector('#searchButton');

    let userInput = document.getElementById('inputValue').value;

    console.log(userInput);

    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key + "&query=" + userInput)
        .then(res => res.json())
        .then(object => object.results[0])
        .then(aboutMovie); //refernece page it goes on
}
