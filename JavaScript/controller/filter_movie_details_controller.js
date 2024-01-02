import MovieService from "../services/movieService.js";


$(document).ready(function(){
    let params;
    $(document).on('click','#filter-btn',function(){

        //gettting value from filter
        // const year = '2009';//hardcore value

        //storing parameter value
        params = new URLSearchParams([['Year', '2009'],['Year','2007']]);

        //common from this
       MovieService.getMovieDetailsbyFilter(params).then((response)=>{
           
        let movies = response.data;
        $(".content").html("<div class='popular-movies movies-container'></div>");
        $(".movies-container").append("<div class = 'card-container'></div>");
        let card_count=1;
         for(let movie of movies){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${movie.Image.replace('C:\\fakepath\\','../images/moviePosters/')}" alt="movie poster" >

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
          
            $(".card_"+card_count).append(row);
            card_count=card_count+1;
         }
        
    }).catch((error)=>{
        console.log(error);
    })
})

$(document).on('click','#search-btn',function(){
    let value = $('#search_bar').val();
//    alert(value);
    params = new URLSearchParams([['Title', 'Avatar']]);

        //common from this
       MovieService.getMovieDetailsbyFilter(params).then((response)=>{
           
        let movies = response.data;
        console.log(movies);
        $(".content").html("<div class='popular-movies movies-container'></div>");
        $(".movies-container").append("<div class = 'card-container'></div>");
        let card_count=1;
         for(let movie of movies){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${movie.Image.replace('C:\\fakepath\\','../images/moviePosters/')}" alt="movie poster" >

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
          
            $(".card_"+card_count).append(row);
            card_count=card_count+1;
         }
        
    }).catch((error)=>{
        console.log(error);
    })


})
})












// Code by Krunal Kharat