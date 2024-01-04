
class SportService{
    static url = "http://localhost:3000/Sports";
    static async getSportDetails(){
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getSportDetailsbyid(id){
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }

    static async getSportDetailsbyFilter(params){
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
export default SportService;





















// Code by Krunal Kharat