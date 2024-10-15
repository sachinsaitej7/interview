// todo naming
class Movie{
    constructor(data){
        this.data = data;
    }

    getTitle(){}
    getName(){};
}

class RtTransformer extends Movie{
    constructor(data){
        super(data);
    }

    getTitle(){
        return this.data.Title;
    }

    getName(){
        return this.data.Movie;
    }

    getImdbFormat(){
        // return this.data.map((data) => Object.keys(data).reduce((acc, key) => {
        //     // return acc[`${key.toLocaleLowerCase()}`] = data[key];
        // }, {}) );

        return this.data.map((movie) => {
            return {...movie, title: movie.Title, genre: movie.Genre, poster: movie.images[0], plot: movie.Plot}
        })
    }
}

class ImdbTransfomer extends Movie{
    constructor(data){
        super(data);
    }

    getTitle(){
        return this.data.title;
    }

    getName(){
        return this.data.movie;
    }
}

export function getTransformer(data){
    return (type) => {
        switch(type){
            case 'rt':
                return new RtTransformer(data);
            case 'imdb':
                return new ImdbTransfomer(data);
            default:
                throw 'Transformer not provided';
        }
    }
}


