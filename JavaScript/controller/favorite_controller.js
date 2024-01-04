// favorites.js

$(document).ready(function () {
    displayFavoriteMovies();
});

function displayFavoriteMovies() {
    // Retrieve favorite movies from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Display favorite movies on the page
    let favoriteList = $('#favorite-list');
    
    favorites.forEach(movie => {
        let listItem = $('<li>');
        listItem.html(`
            <strong>${movie.Title}</strong><br>
            Year: ${movie.Year}<br>
            Details: ${movie.Details}<br>
            <img src="${movie.Image.replace('C:\\fakepath\\', '../images/moviePosters/')}" alt="movie poster" style="max-width: 200px;">
            <hr>
        `);
        favoriteList.append(listItem);
    });
}
