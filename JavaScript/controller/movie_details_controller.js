import MovieService from "../services/movieService.js";
import WebSeriesService from "../services/webSeriesService.js";

$(document).ready(function(){
    let card_count= 1;

    // added movies to homepage
    MovieService.getMovieDetails()
    .then((response)=>{
        let movies = response.data;

        $(".content").append("<div class='popular-movies movies-container'></div>");
        $(".movies-container").append("<div class = 'content-header'></div>");
        $(".content-header").append("<h2 class='content-title'>Popular Movies</h2>");
        $(".content-header").append("<button class='seeMore' id='moviesSeemore-btn'>see more...</button>");
        $(".movies-container").append("<div class = 'card-container'></div>");
        
         for(let movie of movies){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${movie.Image.replace('C:\\fakepath\\','../images/moviePosters/')}" alt="poster" >

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
            // let bookBtn = `<button style="margin-top: 10%;" class="book-now-btn" movieId='${movie.id}'>Book Now</button>`
          
            $(".card_"+card_count).append(row);

           
            // $(".card_"+card_count).append(bookBtn);
            card_count=card_count+1;
            
         }
        
    }).catch((error)=>{
        console.log(error);
    })

// added webseries to homepage
    WebSeriesService.getWebSeriesDetails()
    .then((response)=>{
       
        
        let webSeries = response.data;
        $(".content").append("<div class='webSeries-container'></div>");
        $(".webSeries-container").append("<div class = 'content-header1'></div>");
        $(".content-header1").append("<h2 class='content-title'>Popular WebSeries</h2>");
        $(".content-header1").append("<button class='seeMore' id='webSeriesSeemore-btn'>see more...</button>");
        $(".webSeries-container").append("<div class = 'card-container'></div>");
        
         for(let series of webSeries){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${series.Image.replace('C:\\fakepath\\','../images/webSeriesPosters/')}" alt="poster" >

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
          
            $(".card_"+card_count).append(row);

           
            // $(".card_"+card_count).append(bookBtn);
            card_count=card_count+1;
            
         }
        
 
        
            
        
    }).catch((error)=>{
        console.log(error);
    })
})
















// Code by Krunal Kharat