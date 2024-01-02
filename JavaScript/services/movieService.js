
class MovieService{
    static url = "http://localhost:3000/Films";
    // static async addMovieDetails(product){
    //     //post API --to insert record
    //     return await axios.post(this.url,product);   
    // }

    static async getMovieDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getMovieDetailsbyId(id){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }

    static async getMovieDetailsbyFilter(params){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}`,{params});
    }
    // static async deleteProductDetails(id){
    //     return await axios.delete(`${this.url}/${id}`)
    // }

    // static async updateProductDetails(id,product){
    //     // to update data from URL --get API
    //     return await axios.put(`${this.url}/${id}`,product);
    // }
}
export default MovieService;





















// Code by Krunal Kharat