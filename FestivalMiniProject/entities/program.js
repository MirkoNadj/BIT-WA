// Constructor Program //
function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = function () {
        return this.listOfMovies.length;
    };
    this.addMovie = function (movieObject) {
		/*   WORK IN PROGRESS
        var countGenre = 0;  
        var sumLength = 0;         
        this.listOfMovies.forEach(function (movieElement) {
            sumLength += movieElement.length;
            if (movieElement.genre === movieObject.genre) {
                countGenre++;
            }
        })
        if (countGenre < 50 && (sumLength + movieObject.length) <= 480) { 
            
        }*/
		return this.listOfMovies.push(movieObject);
    };
    this.getData = function () {
        var allMoviesLength = 0;
        var allMoviesData = '';
        this.listOfMovies.forEach(function (movieElement) {
            allMoviesLength += parseInt(movieElement.length);
            allMoviesData += movieElement.getData() + '\n\t\t';
        });
        return this.date.toDateString() + ', ' + this.listOfMovies.length + ' movies, program duration ' + allMoviesLength + ' min.' /*\n\t\t' + allMoviesData*/ ;
        };
    
    this.getDate = function () {
        return this.date.toDateString()
        };

    this.removeMovie = function (deleteIndex) {
        return this.listOfMovies.splice(deleteIndex, 1)
    }
};

export default Program