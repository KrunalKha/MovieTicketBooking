
class SportService {
    static url = "http://localhost:3000/Sports";
    static async getSportDetails() {
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getSportDetailsbyid(id) {
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }

    static async getSportDetailsbyFilter(params) {
        // to fetch data from URL --get API
        return await axios.get(`${this.url}`, { params });
    }
}
export default SportService;





















// Code by Krunal Kharat