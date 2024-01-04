
class EventService{
    static url = "http://localhost:3000/Events";
    static async getEventDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getEventDetailsbycity(cityName){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}`,{
            params: {
            city: cityName
            }
        });
    }

    static async getEventDetailsbyFilter(params){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}`,{params});
    }
    
    static async getEventDetailsbyId(id){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }
    
    // static async deleteProductDetails(id){
    //     return await axios.delete(`${this.url}/${id}`)
    // }

    // static async updateProductDetails(id,product){
    //     // to update data from URL --get API
    //     return await axios.put(`${this.url}/${id}`,product);
    // }
}
export default EventService;





















// Code by Krunal Kharat