export class Movie{
    set Title(MovieTitle){
        this._Title = MovieTitle;
    }
    set Year(year){
        this._Year = year;
    }
    
    set Runtime(runtime){
        this._Runtime = runtime;
    }
    set Image(image){
        this._Image = image
    }

    get Title(){
        return this._Title;
    }
    get Year(){
        return this._Year ;
    }
    
    get Runtime(){
        return this._Runtime;
    }
    get Image(){
        return this._Image;
    }

    
}
export default Movie;















// Code by Krunal Kharat