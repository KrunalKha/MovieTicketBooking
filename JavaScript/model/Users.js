export class User {
    set name(name) {
        this._name = name;
    }
    set emailId(emailId) {
        this._emailId = emailId;
    }
    set pass(pass) {
        this._pass = pass;
    }
    set favourites(favourites) {
        this._favourites = favourites;
    }
    set city(city) {
        this._city = city;
    }


    get name() {
        return this._name;
    }
    get emailId() {
        return this._emailId;
    }

    get pass() {
        return this._pass;
    }
    get favourites() {
        return this._favourites;
    }
    get city() {
        return this._city;
    }

}
export default User;















// Code by Krunal Kharat