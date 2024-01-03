import MovieService from "../services/movieService.js";
import WebSeriesService from "../services/webSeriesService.js";


$(document).ready(function () {
    $(document).on('click', '#filter-btn', function () {

        let year_inp = $('input[name="year"]:checked').val();
        let genre_inp = $('input[name="genre"]:checked').val();



        WebSeriesService.getWebSeriesDetails().then((response) => {


            let webSeries = response.data;
            //filter code goes here
            function filterwebSeriesByYear(year) {
                webSeries = webSeries.filter(series => series.Year < year);

            }

            function filterwebSeriesonYear(year) {
                webSeries = webSeries.filter(series => series.Year == year);
            }

            if (year_inp == 'old') {
                year_inp = 2019;
                filterwebSeriesByYear(year_inp);
            } else if (year_inp != 'all' && year_inp != "" && year_inp != undefined) {
                filterwebSeriesonYear(year_inp);
            } else {
                console.log("error because of invalid value");
            }



            //filtering genre of movies
            if (genre_inp != null && genre_inp != undefined && genre_inp != "") {
                webSeries = webSeries.filter(series => series.Genre.includes(genre_inp));
            }

            $(".content").html("<div class='webSeries-container'></div>");
            $(".webSeries-container").append("<div class = 'card-container'></div>");
            let card_count = 1;
            for (let series of webSeries) {

                let card = `<div class = 'card card_${card_count}'></div>`;
                let row = `
                <div class ="card-image">
                <img src="${series.Image.replace('C:\\fakepath\\', '../images/webSeriesPosters/')}" alt="movie poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${series.Title}"</h2>
						<p>Year: "${series.Year}"</p>
						<button style="margin-top: 10%;" class="book-now-btn" movieId='${series.id}'>Watch Now</button>
					</div>
				</div>
            `
                $(".card-container").append(card);
                // let bookBtn = `<button style="margin-top: 10%;" class="book-now-btn" movieId='${movie.id}'>Book Now</button>`

                $(".card_" + card_count).append(row);


                // $(".card_"+card_count).append(bookBtn);
                card_count = card_count + 1;

            }





        }).catch((error) => {
            console.log(error);
        })
    })

})


















// Code by Krunal Kharat