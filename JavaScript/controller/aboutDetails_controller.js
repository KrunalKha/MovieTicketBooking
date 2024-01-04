
import EventService from "../services/eventsService.js";
import MovieService from "../services/movieService.js";
import SportService from "../services/sportsService.js";
import WebSeriesService from "../services/webSeriesService.js";


$(document).ready(function () {
    let params = new URLSearchParams(document.location.search);
    let category = params.get("category");
    let id = parseInt(params.get("id"));

    if (category === 'Films') {
        MovieService.getMovieDetailsbyId(id)
            .then((response) => {
                let movie = response.data;

                // Preload image
                const preloadImage = new Image();
                preloadImage.src = `${movie.Image.replace('C:\\fakepath\\', '../images/moviePosters/')}`;
                
                // Clear existing content and append new HTML
                $(".content").html(`
                    <div class='popup-overlay'>
                        <div class='popup-container'>
                            <div class='display-container'>
                                <div class='card-container'>
                                    <div class="card mb-3" style="width: 1500px; padding: 10px;">
                                        <div class="row g-0">
                                            <div class="col-md-4" id="details-image" id="pop-up">
                                                <img src="${preloadImage.src}" alt="movie poster" style="margin-top: 30px;">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title mx-5" id="mov-title"><strong>${movie.Title}</strong></h5>
                                                </div>
                                                <div class="card-footer mx-5 mb-3" id="mov-year">
                                                    <strong>${movie.Year}</strong>
                                                </div>
                                                <div class="card-body mx-5" id="txt-height">
                                                    <small class="text-muted"><strong>${movie.Details}</strong></small>
                                                </div>
                                                <button class="add-to-favorite-btn">Add to Favorites</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);

                // Attach click event to close the popup
                $('.add-to-favorite-btn').click(function () {
                    // Store the movie details in favorites (you can use localStorage, a database, etc.)
                    storeInFavorites(movie);

                    // Show an alert
                    alert("Movie added to favorites!");

                    // Redirect to another page
                    window.location.href = '../HTML/favorite.html';
                });

                // Add a class to the body to show a popup style
                $('body').addClass('popup-open');

            })
            .catch((error) => {
                console.error(error);
            });
    } 
    else if(category === 'Webseries'){
        WebSeriesService.getWebSeriesDetailsbyId(id)
        .then((response) => {
            let series = response.data;

            // Preload image
            const preloadImage = new Image();
            preloadImage.src = `${series.Image.replace('C:\\fakepath\\', '../images/webSeriesPosters/')}`;
            
            // Clear existing content and append new HTML
            $(".content").html(`
                <div class='popup-overlay'>
                    <div class='popup-container'>
                        <div class='display-container'>
                            <div class='card-container'>
                                <div class="card mb-3" style="max-width: 1000px; padding: 10px;">
                                    <div class="row g-0">
                                        <div class="col-md-4" id="details-image" id="pop-up" >
                                            <img src="${preloadImage.src}"  loading="lazy">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title mx-5" id="mov-title"><strong>${series.Title}</strong></h5>
                                            </div>
                                            <div class="card-footer mx-5 mb-3" id="mov-year">
                                                <strong>${series.Year}</strong>
                                            </div>
                                            <div class="card-body mx-5" id="txt-height">
                                                <small class="text-muted"><strong>${series.Details}</strong></small>
                                            </div>
                                            <button class="add-to-favorite-btn">Add to Favorites</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            // Attach click event to close the popup
            $('.add-to-favorite-btn').click(function () {
                // Store the movie details in favorites (you can use localStorage, a database, etc.)
                storeInFavorites(series);

                // Show an alert
                alert("Movie added to favorites!");

                // Redirect to another page
                window.location.href = '../HTML/favorite.html';
            });

            // Add a class to the body to show a popup style
            $('body').addClass('popup-open');

        })
        .catch((error) => {
           
            console.error(error);
        });

    }else if(category === 'Event'){
        
    EventService.getEventDetailsbyId(id)
            .then((response) => {
                let event = response.data;
                    alert(id);
                // Preload image
                const preloadImage = new Image();
                preloadImage.src = `${event.Image.replace('C:\\fakepath\\', '../images/eventPoster/')}`;

                // Clear existing content and append new HTML
                $(".content").html(`
                    <div class='popup-overlay'>
                        <div class='popup-container'>
                            <div class='display-container'>
                                <div class='card-container'>
                                    <div class="card mb-3" style="max-width: 1000px; padding: 10px;">
                                        <div class="row g-0">
                                            <div class="col-md-4" id="details-image" id="pop-up">
                                                <img src="${preloadImage.src}" alt="movie poster" loading="lazy">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title mx-5" id="mov-title"><strong>${event.title}</strong></h5>
                                                </div>
                                                <div class="card-footer mx-5 mb-3" id="mov-year">
                                                    <strong>${event.genre}</strong>
                                                </div>
                                                <div class="card-body mx-5" id="txt-height">
                                                    <small class="text-muted"><strong>${event.description}</strong></small>
                                                </div>
                                                <button class="add-to-favorite-btn">Add to Favorites</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);

                // Attach click event to close the popup
                $('.add-to-favorite-btn').click(function () {
                    // Store the movie details in favorites (you can use localStorage, a database, etc.)
                    storeInFavorites();

                    // Show an alert
                    alert("Event added to favorites!");

                    // Redirect to another page
                    window.location.href = '../HTML/favorite.html';
                });

                // Add a class to the body to show a popup style
                $('body').addClass('popup-open');

            })
            .catch((error) => {
                
                console.error(error);
            });

    }else if(category === 'Sport'){
        SportService.getSportDetailsbyid(id)
            .then((response) => {
                let sport = response.data;

                // Preload image
                const preloadImage = new Image();
                preloadImage.src = `${sport.image.replace('C:\\fakepath\\', '../images/sportsPosters/')}`;

                // Clear existing content and append new HTML
                $(".content").html(`
                    <div class='popup-overlay'>
                        <div class='popup-container'>
                            <div class='display-container'>
                                <div class='card-container'>
                                    <div class="card mb-3" style="max-width: 1000px; padding: 10px;">
                                        <div class="row g-0">
                                            <div class="col-md-4" id="details-image" id="pop-up">
                                                <img src="${preloadImage.src}" alt="movie poster" loading="lazy">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title mx-5" id="mov-title"><strong>${sport.match}</strong></h5>
                                                </div>
                                                <div class="card-footer mx-5 mb-3" id="mov-year">
                                                    <strong>${sport.date}</strong>
                                                </div>
                                                <div class="card-body mx-5" id="txt-height">
                                                    <small class="text-muted"><strong>${sport.venue}</strong></small>
                                                </div>
                                                <button class="add-to-favorite-btn">Add to Favorites</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);

                // Attach click event to close the popup
                $('.add-to-favorite-btn').click(function () {
                    // Store the movie details in favorites (you can use localStorage, a database, etc.)
                    storeInFavorites(sport);

                    // Show an alert
                    alert("Movie added to favorites!");

                    // Redirect to another page
                    window.location.href = '../HTML/favorite.html';
                });

                // Add a class to the body to show a popup style
                $('body').addClass('popup-open');

            })
            .catch((error) => {
                console.error(error);
            });

    }else{
        console.log("something went wrong")
    }
});


$('.add-to-favorite-btn').click(function () {
    // Store the movie details in favorites (you can use localStorage, a database, etc.)
    storeInFavorites(movie);

    // Redirect to the favorites page
    window.location.href = 'favorites.html';
});

function storeInFavorites(movie) {
    // Implement your logic to store the movie in favorites (e.g., using localStorage, a database, etc.)
    // For example, using localStorage:
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


$(document).ready(function () {
    // Set a delay (in milliseconds) before showing the popup
    const delayTime = 40000; // 40 seconds

    setTimeout(function () {
        // Open the popup after the delay
        $("#imagePopup").css("display", "block");
        $("body").addClass("popup-open");
    }, delayTime);

    // Close the popup when the close button is clicked
    $("#closePopupBtn").click(function () {
        $("#imagePopup").css("display", "none");
        $("body").removeClass("popup-open");
    });

    // Close the popup when clicking outside the modal content
    $(window).click(function (e) {
        if ($(e.target).is("#imagePopup")) {
            $("#imagePopup").css("display", "none");
            $("body").removeClass("popup-open");
        }
    });
});
  
// script.js

