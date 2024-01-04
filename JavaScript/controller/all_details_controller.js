import MovieService from "../services/movieService.js";
import WebSeriesService from "../services/webSeriesService.js";
import SportService from "../services/sportsService.js";
import UserService from "../services/userService.js";
import EventService from "../services/eventsService.js";

$(document).ready(function () {
    let card_count = 1;

    // added movies to homepage
    MovieService.getMovieDetails()
        .then((response) => {
            let movies = response.data;

            $(".content").append("<div class='popular-movies movies-container'></div>");
            $(".movies-container").append("<div class = 'content-header header_cards'></div>");
            $(".content-header").append("<h2 class='content-title'>Popular Movies</h2>");
            $(".content-header").append("<button class='seeMore' id='moviesSeemore-btn'>see more...</button>");
            $(".movies-container").append("<div class = 'movies-card-container card-container'></div>");

            for (let movie of movies) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${movie.Image.replace('C:\\fakepath\\', '../images/moviePosters/')}" alt="poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${movie.Title}"</h2>
						<p>Year: "${movie.Year}"</p>
						<button style="margin-top: 10%;" class="book-now-movie book-now-btn" movieId='${movie.id}'>Book Now</button>
					</div>
				</div>

            `
                $(".movies-card-container").append(card);

                $(".card_" + card_count).append(row);

                card_count = card_count + 1;

            }
            $('.book-now-movie').click(function () {

                let categoryId = 'Films';
                let Id = $(this).attr('movieId');
                alert(Id);
                window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;

            });
            $('#moviesSeemore-btn').click(function () {

                window.location.href = 'movies.html';

            });

        }).catch((error) => {
            console.log(error);
        })

    // added webseries to homepage
    WebSeriesService.getWebSeriesDetails()
        .then((response) => {


            let webSeries = response.data;
            $(".content").append("<div class='popular-webseries webSeries-container'></div>");
            $(".webSeries-container").append("<div class = 'content-header1 header_cards'></div>");
            $(".content-header1").append("<h2 class='content-title'>Popular WebSeries</h2>");
            $(".content-header1").append("<button class='seeMore' id='webSeriesSeemore-btn'>see more...</button>");
            $(".webSeries-container").append("<div class = 'webseries-card-container card-container'></div>");

            for (let series of webSeries) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${series.Image.replace('C:\\fakepath\\', '../images/webSeriesPosters/')}" alt="poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${series.Title}"</h2>
						<p>Year: "${series.Year}"</p>
						<button style="margin-top: 10%;" class="book-now-webseries book-now-btn" webSeriesId='${series.id}'>Book Now</button>
					</div>
				</div>
            `
                $(".webseries-card-container").append(card);

                $(".card_" + card_count).append(row);


                card_count = card_count + 1;

            }
            $('.book-now-webseries').click(function () {

                let categoryId = 'Webseries';
                let Id = $(this).attr('webSeriesId');
                window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;

            });
            $('#webSeriesSeemore-btn').click(function () {

                window.location.href = 'webSeries.html';

            });

        }).catch((error) => {
            console.log(error);
        })

    // added sports to homepage
    SportService.getSportDetails()
        .then((response) => {


            let sports = response.data;

            $(".content").append("<div class='sports-container'></div>");
            $(".sports-container").append("<div class = 'content-header2 header_cards'></div>");
            $(".content-header2").append("<h2 class='content-title'>Upcoming Sports</h2>");
            $(".content-header2").append("<button class='seeMore' id='sportsSeemore-btn'>see more...</button>");
            $(".sports-container").append("<div class = 'sports-card-container card-container'></div>");

            for (let sport of sports) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${sport.image.replace('C:\\fakepath\\', '../images/sportsPosters/')}" alt="sport poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${sport.match}"</h2>
						<p>Time: "${sport.time}"</p>
						<button style="margin-top: 10%;" class="book-now-sport book-now-btn" sportId='${sport.id}'>Book Now</button>
					</div>
				</div>

            `
                $(".sports-card-container").append(card);

                $(".card_" + card_count).append(row);
                card_count = card_count + 1;
            }

            $('.book-now-sport').click(function () {
                let categoryId = 'Sport';
                let Id = $(this).attr('sportId');
                window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;

            });
            $('#sportsSeemore-btn').click(function () {
                window.location.href = 'sports.html';

            });



        }).catch((error) => {
            console.log(error);

        })

    let Id = 1;
    //add events here
    UserService.getUsersDetailsbyId(Id).then((response) =>{
        let user = response.data;
        let userCity = user._city;
       
        EventService.getEventDetailsbycity(userCity)
        .then((response) => {
            let events = response.data;
            console.log(events);
            $(".content").append("<div class='events-container'></div>");
            $(".events-container").append("<div class = 'content-header3 header_cards'></div>");
            $(".content-header3").append("<h2 class='content-title'>Events In your City</h2>");
            $(".content-header3").append("<button class='seeMore' id='eventsSeemore-btn'>see more...</button>");
            $(".events-container").append("<div class = 'events-card-container card-container'></div>");


            for (let event of events) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${event.Image.replace('C:\\fakepath\\', '../images/eventPoster/')}" alt="event poster">
                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${event.title}"</h2>
						<p>Artist Name: "${event.artist}"</p>
						<button style="margin-top: 10%;" class="book-now-event book-now-btn" eventId='${event.id}'>Book Now</button>
					</div>
				</div>

            `
                $(".events-card-container").append(card);

                $(".card_" + card_count).append(row);
                card_count = card_count + 1;
            }
            $('.book-now-event').click(function () {

                let EventId = 'Event';
                let Id = $(this).attr('eventId');
                window.location.href = 'booking_show.html?category=' + EventId + '&id=' + Id;

            });
            $('#eventsSeemore-btn').click(function () {
                window.location.href = 'events.html';

            });

        }).catch((error) => {
            console.log(error);
        });


    })

    
   

    //making banner clickable
    $('.carousel-item').on('click', function () {

        var categoryId = 'Sport';
        var Id = $(this).attr('id');
        var link = 'booking_show.html?category=' + categoryId + '&id=' + Id
        if (link) {
            window.location.href = link;
        }
    });

    // city popup
    $('#city').on('click', function (e) {
        e.preventDefault();
        $('#popupContainer').fadeIn();

        $('.city-button').on('click', function (event) {
             event.preventDefault();
            var selectedCity = $(this).data('city');
            //post the city to user database and display
            // alert('You selected: ' + selectedCity);
            let userId = 1;

            let updatedData = {
                _city: selectedCity
            }

            UserService.editUsersDetails(userId, updatedData);
            //changing temperory needs to debug
            $("#city-label").html(selectedCity);
           
            $('#popupContainer').fadeOut();
           
        });
    });


    $('#closeButton').on('click', function () {
        $('#popupContainer').fadeOut();
    });





})





// Code by Krunal Kharat