
class MovieService {
    static url = "http://localhost:3000/Films";
    static async getMovieDetails() {

        return await axios.get(this.url);
    }
    static async getMovieDetailsbyId(id) {

        return await axios.get(`${this.url}/${id}`);
    }

    static async getMovieDetailsbyFilter(params) {

        return await axios.get(`${this.url}`, { params });
    }


}
export default MovieService;





















// Code by Krunal Kharat