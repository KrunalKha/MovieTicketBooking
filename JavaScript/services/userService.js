
class UserService {
    static url = "http://localhost:3000/Users";
    static async addUserDetails(user) {
        //post API --to insert record
        return await axios.post(this.url, user);
    }
    static async getUsersDetails() {
        // to fetch data from URL --get API
        return await axios.get(this.url);
    }
    static async getUsersDetailsbyId(id) {
        // to fetch data from URL --get API
        return await axios.get(`${this.url}/${id}`);
    }
    static async updateUsersDetails(id, user) {
        // to update data from URL --get API
        return await axios.put(`${this.url}/${id}`, user);
    }
    static async editUsersDetails(id, updated) {
        // to update data from URL --get API
        return await axios.patch(`${this.url}/${id}`, updated);
    }


}
export default UserService;
