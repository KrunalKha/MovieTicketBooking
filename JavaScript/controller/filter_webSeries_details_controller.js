import MovieService from "../services/movieService.js";
import WebSeriesService from "../services/webSeriesService.js";


$(document).ready(function(){
    $(document).on('click','#filter-btn',function(){

        //gettting value from filter
        // const year = '2009';//hardcore value

        //storing parameter value
       const params = new URLSearchParams([['Year', '2008'],['Year','2007']]);

       WebSeriesService.getWebSeriesDetailsbyFilter(params).then((response)=>{
           
         
        let webSeries = response.data;
        $(".content").html("<div class='webSeries-container'></div>");
        $(".webSeries-container").append("<div class = 'card-container'></div>");
        let card_count=1;
         for(let series of webSeries){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${series.Image.replace('C:\\fakepath\\','../images/webSeriesPosters/')}" alt="movie poster" >

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

})


















// Code by Krunal Kharat