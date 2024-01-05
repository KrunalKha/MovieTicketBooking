class SeatService{
    static url="http://localhost:3000/seats";

    static bookTicketUrl ='http://localhost:3000/book-tickets';

    static async getSeatDetails(){
        return await axios.get(this.url);
    }
    static async bookTickets(selectedSeats) {
     
      console.log(selectedSeats);
      return await axios.post(this.bookTicketUrl, { seats: selectedSeats });

    }
    static async updateSeatStatus(seatName, newStatus) {
      try {
        const response = await axios.put(`${this.url}/${seatName}`, { status: newStatus });
        return response.data;
      } catch (error) {
        throw error;
      }
    }

}
export default SeatService;