// favorites.js

$(document).ready(function () {
    displayFavoriteMovies();
    displayFavoriteEvent();
});

function displayFavoriteMovies() {
    // Retrieve favorite movies from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites);

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

    favorites.forEach(serie => {
        let listItem = $('<li>');
        listItem.html(`
            <strong>${serie.Title}</strong><br>
            Year: ${serie.Year}<br>
            Details: ${serie.Details}<br>
            <img src="${serie.Image.replace('C:\\fakepath\\', '../images/webSeriesPosters/')}" alt="movie poster" style="max-width: 200px;">
            <hr>
        `);
        favoriteList.append(listItem);
    });

    

    favorites.forEach(sport => {
        let listItem = $('<li>');
        listItem.html(`
            <strong>${sport.Title}</strong><br>
            Year: ${sport.Year}<br>
            Details: ${sport.Details}<br>
            <img src="${sport.Image.replace('C:\\fakepath\\', '../images/sportsPosters/')}" alt="movie poster" style="max-width: 200px;">
            <hr>
        `);
        favoriteList.append(listItem);
    });
}

function displayFavoriteEvent(){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites);

// Display favorite movies on the page
let favoriteList = $('#favorite-list');

favorites.forEach(event => {
    let listItem = $('<li>');
    listItem.html(`
        <strong>${event.Title}</strong><br>
        Year: ${event.Year}<br>
        Details: ${event.Details}<br>
        <img src="${event.Image.replace('C:\\fakepath\\', '../images/eventPoster/')}" alt="event poster" style="max-width: 200px;">
        <hr>
    `);
    favoriteList.append(listItem);
});
}
