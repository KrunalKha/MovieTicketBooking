
class EventService {
    static url = "http://localhost:3000/Events";
    static async getEventDetails() {
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getMovieDetailsbycity(city) {
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${city}`);
    }

    static async getEventDetailsbyFilter(params) {
        // to fetch data from URL --get API
        return await axios.get(`${this.url}`, { params });
    }
}
export default EventService;





















// Code by Krunal Kharat