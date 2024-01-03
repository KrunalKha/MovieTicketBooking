import SportService from "../services/sportsService.js";

$(document).ready(function(){

    SportService.getSportDetails()
    .then((response)=>{
       
        
        let sports = response.data;

        $(".content").append("<div class='sports-container'></div>");
        $(".sports-container").append("<div class = 'card-container'></div>");
        let card_count=1;
         for(let sport of sports){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${sport.image.replace('C:\\fakepath\\','../images/sportsPosters/')}" alt="sport poster" >

                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${sport.title}"</h2>
						<p>Time: "${sport.time}"</p>
						<button style="margin-top: 10%;" class="book-now-btn" sportId='${sport.Id}'>Watch Now</button>
					</div>
				</div>

            `  
            $(".card-container").append(card);
          
            $(".card_"+card_count).append(row);
            card_count=card_count+1;
         }

         $('.book-now-btn').click(function() {
            
            var categoryId = 'Sport';
            var Id = $(this).attr('sportId'); 
            window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;
            
          });
        
    }).catch((error)=>{
        console.log(error);
    })

})

















// Code by Krunal Kharat