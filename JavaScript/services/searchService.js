
class SearchService{
    static url1 = "http://localhost:3000/Films";
    static url2 = "http://localhost:3000/Webseries";
    static url3 = "http://localhost:3000/Sports";
    static url3 = "http://localhost:3000/Events";

    apiEndpoints = [
        url1,
        url2,
        url3,
        url4
        // Add more URLs as needed
      ];


    static async getMovieDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url1);
    }
    static async getWebSeriesDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url2);
    }
    static async getSportDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url3);
    }
    static async getEventDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url4);
    }

}
export default SearchService;





















// Code by Krunal Kharat