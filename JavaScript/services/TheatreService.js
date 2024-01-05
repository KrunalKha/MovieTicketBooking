class TheatreService{
    static url="http://localhost:3000/theaters";
    static async getTheatreDetails(theatre){
        return await axios.get(this.url);
    }

}

export default TheatreService;