import MovieServices from "../services/movieService.js";
import UserService from "../services/userService.js";


$(document).ready(function () {

    let params = new URLSearchParams(document.location.search);
    let category = params.get("category");
    let id = parseInt(params.get("id"));
    let userId = 1;
    UserService.getUsersDetailsbyId(userId).then((response) =>{
        let user = response.data;
        let userCity = user._city;

        MovieServices.getMovieDetailsbyId(id).then(response => {
            let movie = response.data;
            console.log(movie);
            
            $(".theater-container").append("<div class='theater-box'</div>");
            $(".theater-box").append("<h2> Theaters </h2>");
            $(".theater-box").append("<h2> Available Time </h2>");
    
           
            
            let theaterData = movie.theaters[userCity];
            
            let card_count=1;
            for(let th of theaterData){
              
            $(".theater-container").append(`<div class='theater-content cards${card_count}'</div>`);
                let left = `<div class = 'theater-names'><h2 id="theater-title">"${th.Name}"</h2></div>`;
                $(`.cards${card_count}`).append(left);
                let right;
                for (let time of th.Time) {
                    right = `  
                        <div class="theater-times">
                            <button style="margin-top: 10%;" class="book-now-ticket book-now-btn" btn-Id='${th.id}' movieId='${id}' value='${time}'>${time}</button>
                        </div>
                `  ;
                $(`.cards${card_count}`).append(right);
                  }
                
                card_count=card_count+1;
             }
    
    
    
            $('.book-now-ticket').click(function () {
                let Id = $(this).attr('movieId');
                let th_Id = $(this).attr('btn-Id');
               let time = $(this).attr('value');
                window.location.href = 'seat_booking.html?id='+ Id + '&th_id' + th_Id + '&timing' + time;
    
            });
    
    
        }).catch(error => {
            console.log(error);
        })
    


        }
).catch(error=>{
    console.log(error);
})
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
    

})