import MovieService from "../services/movieService.js";

$(document).ready(function () {

    MovieService.getMovieDetails()
        .then((response) => {
            let movies = response.data;
            $(".content").html("<div class='popular-movies movies-container'></div>");
            $(".movies-container").append("<div class = 'card-container'></div>");
            let card_count = 1;
            for (let movie of movies) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${movie.Image.replace('C:\\fakepath\\', '../images/moviePosters/')}" alt="movie poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${movie.Title}"</h2>
						<p>Year: "${movie.Year}"</p>
						<button style="margin-top: 10%;" class="book-now-btn" movieId='${movie.id}'>Watch Now</button>
					</div>
				</div>

            `
                $(".card-container").append(card);

                $(".card_" + card_count).append(row);
                card_count = card_count + 1;
            }

            $('.book-now-btn').click(function () {

                var categoryId = 'Films';
                var Id = $(this).attr('movieId');
                window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;

            });


        }).catch((error) => {
            console.log(error);
        })

})

















// Code by Krunal Kharat