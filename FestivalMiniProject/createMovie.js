import Movie from "./entities/movie.js"
import { listOfCreatedMovies, createdMovieElementUl, selectMovieList } from "./nodes.js"


// function for creating a new movie
export function createMovie () {
    var movieTitle = document.getElementById('movie-title').value;
    var movieLength = document.getElementById('movie-length').value;
    var movieGenre = document.getElementById('genre').value;

    var movieObject = new Movie(movieTitle, movieGenre, movieLength);
    //console.log(movieObject);

    listOfCreatedMovies.push(movieObject);
    // creating new li (movie) and adding it to the ul below the button
    var createdMovieLi = document.createElement('li');
    createdMovieLi.className = 'createdMovie';
    var removeMovieBtn = document.createElement('button');
    removeMovieBtn.className = 'removeMovieBtn';
    createdMovieLi.textContent = movieObject.getData();
    createdMovieLi.appendChild(removeMovieBtn);
    createdMovieElementUl.appendChild(createdMovieLi);
    // adding new movie to movie dropdown
    var movieOption = document.createElement('option');
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute('value', movieObject.getData());
    selectMovieList.appendChild(movieOption);
    // reseting inputs
    document.getElementById('movie-title').value = '';
    document.getElementById('movie-length').value = '';
    document.getElementById('genre').value = '-'
}

// function for deleting a movie