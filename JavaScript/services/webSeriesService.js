
class WebSeriesService{
    static url = "http://localhost:3000/Webseries";
    // static async addMovieDetails(product){
    //     //post API --to insert record
    //     return await axios.post(this.url,product);   
    // }

    static async getWebSeriesDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getWebSeriesDetailsbyId(id){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }

    static async getWebSeriesDetailsbyFilter(params){
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
export default WebSeriesService;










// Code by Krunal Kharat