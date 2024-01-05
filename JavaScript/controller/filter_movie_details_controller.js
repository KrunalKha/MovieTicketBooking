import MovieService from "../services/movieService.js";


$(document).ready(function () {
    $(document).on('click', '#filter-btn', function () {

        //storing parameter value
        let year_inp = $('input[name="year"]:checked').val();
        let genre_inp = $('input[name="genre"]:checked').val();

        MovieService.getMovieDetails().then((response) => {
            let movies = response.data;

            //filter code goes here
            function filterMoviesByYear(year) {
                movies = movies.filter(movie => movie.Year < year);

            }

            function filterMoviesonYear(year) {
                movies = movies.filter(movie => movie.Year == year);
            }

            if (year_inp == 'old') {
                year_inp = 2019;
                filterMoviesByYear(year_inp);
            } else if (year_inp != 'all' && year_inp != "" && year_inp != undefined) {
                filterMoviesonYear(year_inp);
            } else {
                console.log("error because of invalid value");
            }



            //filtering genre of movies
            if (genre_inp != null && genre_inp != undefined && genre_inp != "") {
                movies = movies.filter(movie => movie.Genre.includes(genre_inp));
            }

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

        }).catch((error) => {
            console.log(error);
        })

    })

    $(document).on('click', '#search-btn', function () {
        let value = $('#search_bar').val().toLowerCase();
       
        MovieService.getMovieDetails().then((response) => {

            let movies = response.data;
            movies = movies.filter(obj=>obj.Title.toLowerCase().includes(value))
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

        }).catch((error) => {
            console.log(error);
        })


    })
})

