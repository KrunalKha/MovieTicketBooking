import EventService from "../services/eventsService.js";


$(document).ready(function(){
    EventService.getEventDetails()
    .then((response)=>{
        let events = response.data;
       
        $(".content").append("<div class='events-container'></div>");
        $(".events-container").append("<div class = 'card-container'></div>");
       
       
        let card_count=1;
         for(let event of events){
           
            let card = `<div class = 'card card_${card_count}'></div>`;
            let row = `
                <div class ="card-image">
                <img src="${event.Image.replace('C:\\fakepath\\','../images/eventPoster/')}" alt="event poster">
                </div>
                <div class="overlay">
					<div class="card-info">
						<h2 id="movie-title">"${event.title}"</h2>
						<p>Artist Name: "${event.artist}"</p>
						<button style="margin-top: 10%;" class="book-now-btn" eventId='${event.id}'>Book Now</button>
					</div>
				</div>

            `  
            $(".card-container").append(card);
          
            $(".card_"+card_count).append(row);
            card_count=card_count+1;
         }
         $('.book-now-btn').click(function() {
            
            var categoryId = 'Event';
            var Id = $(this).attr('eventId'); 
            window.location.href = 'booking_show.html?category=' + categoryId + '&id=' + Id;
            
          });
        
    }).catch((error)=>{
        console.log(error);
    });
})
