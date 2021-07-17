import {createMovie} from "./createMovie.js"
import {createMovieBtnElement} from "./nodes.js"


/*
function deleteMovie () {

    var listOfMovies = document.querySelectorAll('.createdMovie');
    for (var i = 0; i < listOfMovies.length; i++) {
        listOfMovies[i].querySelector('button').classList.toggle('on-off');
        listOfMovies[i].querySelector('button').addEventListener('click', function() {
            this.closest('.createdMovie').remove();
        })
    }
};


// function for deleting a program WORK IN PROGRESS

function deleteProgram () {
    var listOfPrograms = document.querySelectorAll('.createdProgram');
    for (var i = 0; i < listOfPrograms.length; i++) {
        listOfPrograms[i].querySelector('button').classList.toggle('on-off');
        listOfPrograms[i].querySelector('button').addEventListener('click', function() {
            this.closest('.createdProgram').remove();
        })
    }

}






// function for removing a movie from program

function removeMovieFromProgram () {    
    var movieToRemove = document.getElementById('movie-dropdown-list').value;
    var fromWhichProgram = document.getElementById('program-dropdown-list').value;
    //console.log('which' + movieToAdd);
    //console.log(' to' + toWhichProgram);
    listOfCreatedMovies.forEach(function (movieObjectElement) {
        //console.log(movieObjectElement.getData())
        if (movieObjectElement.getData() === movieToRemove) {
            var deleteIndex = listOfCreatedMovies.indexOf(movieObjectElement);
            //console.log(deleteIndex);
            listOfCreatedPrograms.forEach(function (programObjectElement) {
                //console.log(programObjectElement.getDate())
                if (programObjectElement.getDate() === fromWhichProgram) {
                programObjectElement.removeMovie(deleteIndex);
				
                    // update program list info
                    searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
                    //console.log(searchForLi)
                    searchItem = fromWhichProgram;
                    //console.log(searchItem)
                    for (i = 0; i < searchForLi.length; i++) {
                    var currentLi = searchForLi[i].textContent.slice(0,15)
                    //console.log('trenutni Li ' + currentLi)
                        if (searchItem === currentLi) {						
                        searchForLi[i].innerHTML = programObjectElement.getData()
                        }
                    }
				}
            })
        }
    })    
    console.log(listOfCreatedPrograms);    
}
*/

// event listeners

createMovieBtnElement.addEventListener('click', createMovie);
/*
createProgramBtnElement.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click',addMovieToProgram);

removeMovieFromProgramBtnElement.addEventListener('click', removeMovieFromProgram);
deleteMovieBtnElement.addEventListener('click', deleteMovie);
deleteProgramBtnElement.addEventListener('click', deleteProgram);

*/

