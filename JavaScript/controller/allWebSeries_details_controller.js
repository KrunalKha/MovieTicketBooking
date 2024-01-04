import WebSeriesService from "../services/webSeriesService.js";


$(document).ready(function () {
    WebSeriesService.getWebSeriesDetails()
        .then((response) => {


            let webSeries = response.data;
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
						<button style="margin-top: 10%;" class="book-now-btn" webSeriesId='${series.Id}'>Watch Now</button>
					</div>
				</div>
            `
                $(".card-container").append(card);

                $(".card_" + card_count).append(row);

                card_count = card_count + 1;

            }
            $('.book-now-btn').click(function () {

                var categoryId = 'Webseries';
                var Id = $(this).attr('webSeriesId');
                window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;

            });


        }).catch((error) => {
            console.log(error);
        })
})
















// Code by Krunal Kharat